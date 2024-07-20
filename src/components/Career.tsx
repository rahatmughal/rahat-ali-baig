import React, { useRef, useEffect, useState } from 'react';
import TypingBox from './TypingBox';
import { IoLogoHtml5 } from "react-icons/io5";
import { IconType } from 'react-icons';


interface JointProps {
    x: string;
    y: string;
}

interface EdgeProps {
    x: string;
    y: string;
    rotate: string;
}

interface CardProps {
    icon: IconType;
    title: string;
    description: string;
    x: string;
    y: string;
}

const Career = () => {
    const aboutRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);


    const Joint = ({ x, y }: JointProps) => (
        <div className={`absolute ${x} ${y} left-10 w-5 h-5 rounded-full border-4 border-green-700`}>
            <div className='absolute top-0 left-0 w-full h-full rounded-full border-4 border-light-green ring' />
        </div>
    );

    const Edge = ({ x, y, rotate }: EdgeProps) => (
        <div className={`absolute w-[300px] h-0.5 bg-light-green ${rotate} ${x} ${y}`} />

    );


    const SkillCard = ({ icon: Icon, title, description, x, y }: CardProps) => (
        <div className={`absolute z-30 ${y} ${x} w-fit h-fit group`}>
            <div className='relative w-fit h-fit group'>
                {/* Card Container */}
                <div className="relative rounded-2xl overflow-hidden p-0.5 pl-1 pb-1">
                    <div className='relative before:absolute before:content-normal before:bg-gradient-to-tr before:from-light-green before:to-gray-700 before:to-50% before:-top-1/2 before:w-[400px] before:h-[400px] before:-z-10 before:scale-125 before:rounded-2xl before:group-hover:rotate-180 before:transition-all duration-1000 cursor-pointer'>
                        <div className="relative rounded-2xl bg-black w-[400px] p-5 pt-20 flex flex-col justify-center gap-3">
                            <h2 className='font-semibold text-2xl'>{title}</h2>
                            <p className='opacity-60'>{description}</p>
                        </div>
                    </div>
                </div>

                {/* Icon Container */}
                <div className='absolute w-20 h-20 -top-10 left-5 bg-black rounded-full border-[3px] border-gray-700 group-hover:border-light-green/80 flex items-center justify-center'>
                    <Icon className='text-2xl opacity-60 group-hover:opacity-100' />
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setStartTyping(true);
            } else {
                setStartTyping(false);
            }
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, [aboutRef]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>(".sticky");
            sections.forEach((section) => {
                const scrollSection = section.querySelector<HTMLElement>(".scroll_section");
                if (scrollSection) {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const sectionTop = section.getBoundingClientRect().top + scrollTop;
                    const offsetTop = sectionTop - window.innerHeight;
                    let percentage: number = ((scrollTop - offsetTop) / window.innerHeight) * 100;
                    percentage = Math.min(Math.max(percentage, 0), 100); // Ensure percentage is between 0 and 100
                    scrollSection.style.transform = `translate3d(${-percentage * 24}px, 0, 0)`;
                }
            });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="sticky_parent w-full">
                <div className="sticky">
                    <div className='pt-20 pb-6 w-full' id="career">
                        <div ref={aboutRef} className='w-full text-center flex flex-col gap-4 items-center px-12 relative'>
                            <h2 className='text-white/10 font-semibold 2xl:text-[200px] xl:text-[160px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[48px]'>Career</h2>
                            {startTyping && <TypingBox center={true} color={'hue-rotate-[170deg]'} textToType="Here is my journey!" />}
                        </div>
                    </div>

                    <div className="scroll_section">

                        <div className='w-1200 h-[600px] bg-white/10 relative'>
                            <Joint x='left-10' y='top-1/2 -translate-y-1/2' />
                            <Edge rotate='rotate-[-20deg]' x='left-[50px]' y='top-[245px]' />
                            <Joint x='left-[340px]' y='top-[183px]' />
                            <Edge rotate='rotate-[-10deg]' x='left-[357px]' y='top-[165px]' />
                            <SkillCard
                                icon={IoLogoHtml5}
                                title={'HTML'}
                                description={'I starts my journey from HTML. I practice the basic structure of Web deleopment coding!'}
                                x='left-[600px]'
                                y='top-[120px]'
                            />
                            <Edge rotate='rotate-[30deg]' x='left-[900px]' y='top-[210px]' />
                            <Joint x='left-[1180px]' y='top-[280px]' />

                        </div>

                        <div className='w-1200 h-[600px] bg-white/10 relative'>
                            <Joint x='left-10' y='top-1/2 -translate-y-1/2' />
                            <Edge rotate='rotate-[-20deg]' x='left-[50px]' y='top-[245px]' />
                            <Joint x='left-[340px]' y='top-[183px]' />
                            <Edge rotate='rotate-[-10deg]' x='left-[357px]' y='top-[165px]' />
                            <SkillCard
                                icon={IoLogoHtml5}
                                title={'HTML'}
                                description={'I starts my journey from HTML. I practice the basic structure of Web deleopment coding!'}
                                x='left-[600px]'
                                y='top-[120px]'
                            />
                            <Edge rotate='rotate-[30deg]' x='left-[900px]' y='top-[210px]' />
                            <Joint x='left-[1180px]' y='top-[280px]' />

                        </div>
                    </div>
                </div>
            </div>

            {/* <FlowChart /> */}
        </>
    );
};

export default Career;

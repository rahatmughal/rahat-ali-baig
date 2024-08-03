import React, { useRef, useEffect, useState } from 'react';
import TypingBox from './TypingBox';
import Content from './Content';
import { grid } from '../../public';

const Career: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const [startTyping, setStartTyping] = useState(false);

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
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const stickySection = document.querySelector<HTMLElement>('.sticky');

            if (stickySection) {
                const parentElement = stickySection.parentElement;

                if (parentElement) {
                    const offsetTop = parentElement.offsetTop || 0;
                    const scrollSection = stickySection.querySelector<HTMLElement>('.scroll_section');

                    if (scrollSection) {
                        const sectionWidth = scrollSection.offsetWidth || 0;
                        const viewportHeight = window.innerHeight;
                        const scrollY = window.scrollY;

                        // Calculate the percentage of the scroll position
                        let percentage = (scrollY - offsetTop) / (parentElement.scrollHeight - viewportHeight);
                        percentage = Math.max(0, Math.min(percentage, 1));

                        const translateX = (sectionWidth - window.innerWidth) * percentage;
                        scrollSection.style.transform = `translate3d(-${translateX}px, 0, 0)`;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className='py-2 w-full' id="career">
                <div ref={aboutRef} className='w-full text-center flex flex-col gap-4 items-center px-12 relative' data-aos='zoom-in-up'>
                    <h2 className='text-white/10 font-semibold 2xl:text-[200px] xl:text-[160px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[48px]'>Career</h2>
                    {startTyping && <TypingBox center={true} color={'hue-rotate-[170deg]'} textToType="Here is my journey!" />}
                </div>
            </div>

            <div className="sticky_parent w-full">
                <div className="sticky">
                    <div className='absolute w-screen h-screen top-0 left-0'>
                        <div className='w-full h-full filter-white'>
                            <img
                                src={grid}
                                alt={grid}
                                className='w-full'
                                data-aos='fade-up'
                                data-aos-duration='2500'
                                data-aos-easing='ease-in-out'
                            />
                        </div>
                       
                        <div className='w-full absolute top-0 left-0 h-[300px] bg-gradient-to-b from-black from-20% to-transparent' />
                        <div className='w-full absolute bottom-0 left-0 h-[300px] bg-gradient-to-t from-black from-20% to-transparent' />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-white blur-[180px] rounded-full' />
                        <div className='absolute top-1/2  left-1/2 w-[100px] h-[100px] bg-green-600 blur-[80px] rounded-full' />
                        <div className='absolute top-1/2  left-1/2 w-[300px] h-[300px] bg-green-800 blur-[250px] rounded-full' />
                        <div className='absolute -bottom-10 -left-10 z-20 w-[300px] h-[300px] bg-green-600 blur-[240px] rounded-full' />
                    </div>

                    <div className="scroll_section">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;

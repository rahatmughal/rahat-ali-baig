import React, { useRef, useEffect, useState } from 'react';
import { aboutImg } from '../../public';
import TypingBox from './TypingBox';

const Services: React.FC = () => {
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
    }, [aboutRef]);

    return (
        <div className='py-20' id="services">
            <div ref={aboutRef} className='w-full text-center flex flex-col gap-4 items-center px-12 relative' data-aos='zoom-in-up'>
                <h2 className='text-white/10 font-semibold 2xl:text-[200px] xl:text-[160px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[48px]' data-aos='zoom-in-up' >About Us</h2>
                {startTyping && <TypingBox center={true} color={'hue-rotate-[140deg]'} textToType="Hi. I'm a Full Stack Developer." />}
            </div>

            <div className='w-full lg:px-20 px-10 mb-10 flex items-center lg:flex-row flex-col justify-center gap-6'>
                {/* Left Image */}
                <div className='lg:w-1/2 lg:block flex items-center justify-center w-full py-20' data-aos='fade-right'>
                    {/* img-box */}
                    <div className="lg:w-full h-full flex items-center py-5 md:ml-0 -ml-16 relative">
                        <div className="2xl:w-80 md:w-60 w-48 2xl:h-[500px] md:h-[370px] h-[300px] border-[3px] rounded-tl-[40px] translate-x-[0.5rem] translate-y-[0.5rem] rounded-br-[40px] border-[#fcb63485] " />
                        <div
                            className="2xl:w-80 md:w-60 w-48 2xl:h-[500px] md:h-[370px] h-[300px] rounded-tl-[40px] rounded-br-[40px] absolute md:translate-x-[6rem] translate-y-[5rem] md:translate-y-[6rem] translate-x-[5rem]"
                            style={{
                                background: 'linear-gradient(-60deg, #fcb634, black 50%)',
                            }}
                        />
                        <div className="2xl:w-80 md:w-60 w-48 2xl:h-[500px] md:h-[370px] h-[300px] bg-black rounded-tl-[40px] rounded-br-[40px] absolute translate-x-[4.5rem] translate-y-[4.3rem]" />

                        <img
                            src={aboutImg}
                            alt="About"
                            className="absolute top-0 left-0 2xl:w-80 md:w-60 w-48 2xl:h-[500px] md:h-[370px] h-[300px] rounded-tl-[40px] rounded-br-[40px] border-b-4 border-r-4 border-black transform translate-x-[3rem] translate-y-[4rem]"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="xl:w-full lg:w-3/5 w-full h-full flex justify-between lg:gap-10 gap-5 flex-grow lg:px-4 pt-8" data-aos='fade-right'>
                    {/* separator */}
                    <div className='w-0.5 2xl:h-[310px] xl:h-[350px] relative bg-gradient-to-b from-yellow-800 to-yellow-400 before:content-normal before:absolute before:top-0 before:right-1/2 before:translate-x-1/2 before:w-4 before:h-4 before:rounded-full before:bg-yellow-900 after:content-normal after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:w-4 after:h-4 after:rounded-full after:bg-yellow-400' data-aos='fade-right' data-aos-duration="1000" />

                    {/*Content  */}
                    <div className='flex-grow w-4/5' data-aos='fade-right' data-aos-duration="700">
                        <h2 className="xl:text-5xl md:text-4xl text-2xl font-medium">
                            My Journey
                        </h2>

                        <p className="2xl:text-2xl xl:text-xl lg:texl-lg md:text-base text-sm mt-4 font-thin leading-loose tracking-widest">
                            I started my career as a graphics designer in the summer of 2020, creating basic logos for local businesses.
                            Over time, I mastered the tools required for logo design, gaining two years of experience with Adobe Illustrator.
                            Now, I've transitioned into web development, building multiple web pages with HTML, CSS, and JavaScript.
                            I have also gained significant experience in creating responsive websites with WordPress, working with numerous clients.
                            My next goal is to offer full website creation services using code, but for now, I specialize in front-end development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

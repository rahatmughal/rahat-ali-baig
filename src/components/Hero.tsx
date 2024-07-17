"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingBox from './TypingBox';
import { gradientText, heroImg } from '../../public'; // Verify the correct path to your video file

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    return (
        <div className='w-full min-h-screen flex xl:flex-row flex-col-reverse items-center justify-start gap-6 relative tilt'>
            {/* hero img */}
            <img src={heroImg} alt={heroImg} className='xl:absolute z-0 bottom-0 right-0 xl:w-1/2 w-full opacity-80' />

            <div className='py-28 lg:px-20 px-12 flex flex-col justify-center w-full xl:w-3/5 md:min-h-screen relative'>
                <TypingBox textToType="Hi. I'm a Full Stack Developer." />

                <div className='py-10' data-aos='fade-up'>
                    <div className="video-container">
                        <video className="bg-video" src={gradientText} autoPlay muted loop></video>
                        <p className="video-text xl:text-[140px] md:text-9xl sm:text-8xl text-7xl">Mirza Rahat Ali Baig</p>
                    </div>
                </div>
                <p className='text-white/60 md:text-2xl sm:text-xl text-lg leading-loose font-extralight tracking-wide' data-aos='fade-up' data-aos-delay='100'>
                    Specializing in building dynamic and responsive web applications using React and Node.js. With a strong focus on performance and user experience, I aim to create engaging and efficient solutions. Let's collaborate to bring your ideas to life and build something amazing together.
                </p>
            </div>
        </div>
    );
};

export default Hero;

"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingBox from './TypingBox';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, [])

    return (
        <div className='w-full min-h-screen flex lg:flex-row flex-col items-center justify-center gap-6'>
            <div className='py-28 lg:px-20 px-12 flex flex-col justify-center w-full xlg:w-1/2 min-h-screen'>
                <TypingBox
                    textToType="Hi. I'm a Full Stack Developer ready to build Blazing Websites. I specialize in React, Node.js, and more... Let's create something amazing together."
                />

                <h1 className='text-9xl font-semibold gradient-sparkles py-10' data-aos='fade-up'>
                    Mirza Rahat Ali Baig
                </h1>
            </div>

            <div className='p-20 flex flex-col justify-center w-1/2 max-h-screen'>
                {/* Additional content can go here */}
            </div>
        </div>
    );
};

export default Hero;

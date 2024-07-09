import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoSparklesSharp } from 'react-icons/io5';
import TypingBox from './TypingBox';

const Hero = () => {
    AOS.init({ duration: 700 });

    return (
        <div className='w-full max-h-screen flex items-center justify-center gap-6'>
            <div className='p-20 flex flex-col justify-center w-1/2 h-screen'>
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

"use client";
import React from 'react';
import 'aos/dist/aos.css';
import TypingBox from './TypingBox';
import { heroImg } from '../../public';
import SpotlightAnimation from './SpotlightAnimation';

const Hero: React.FC = () => {

    return (
        <div className='w-full min-h-screen flex xl:flex-row flex-col-reverse items-center justify-start gap-6 relative'>
            {/* hero img */}

            {/* <img src={heroImg} alt={heroImg} className='absolute z-0 top-0 right-0 w-full opacity-10' /> */}
            <div className='absolute -top-10 left-10 w-[200px] h-[200px] rounded-full bg-blue-700 blur-[200px]' />
            <div className='absolute -top-10 right-10 w-[200px] h-[200px] rounded-full  bg-cyan-600 blur-[200px]' />
            <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-800 blur-[400px]' />
            {/* <SpotlightAnimation /> */}

            {/* Content Box */}
            <div className='py-28 lg:px-20 px-12 flex flex-col justify-center items-center w-full md:min-h-screen relative'>
                <TypingBox color='hue-rotate-[-30deg]' textToType="Hi. I'm a Full Stack Developer." />

                <div className='py-10' data-aos='fade-up'>
                    <p className="xl:text-[140px] md:text-9xl sm:text-8xl text-7xl font-extralight min-h-[155px] random-gradient-text">
                        Mirza Rahat Ali Baig
                    </p>

                </div>

                <p className='text-white/60 md:text-2xl w-1/2 text-center sm:text-xl text-lg font-thin tracking-wide !leading-[44px]' data-aos='fade-up' data-aos-delay='100'>
                    Specializing in building dynamic and responsive web applications using React and Node.js. With a strong focus on performance and user experience, I aim to create engaging and efficient solutions. Let's collaborate to bring your ideas to life and build something amazing together.
                </p>
            </div>
        </div>
    );
};

export default Hero;

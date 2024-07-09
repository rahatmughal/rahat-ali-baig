"use Client";

import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingBox from './TypingBox'; // Import TypingBox component

const About: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null); // Specify the type for useRef

    useEffect(() => {
        AOS.init({ duration: 700 });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Access TypingBox component methods using useRef and trigger typing effect
                        if (aboutRef.current) {
                            aboutRef.current.startTyping();
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={aboutRef} className='p-20 flex flex-col justify-center max-h-screen'>
            <TypingBox
                textToType="This is the About section where you can describe yourself or your business."
                ref={aboutRef} // Pass ref to TypingBox
            />
        </div>
    );
};

export default About;

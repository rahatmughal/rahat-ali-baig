import React, { useRef, useEffect, useState } from 'react';
import TypingBox from './TypingBox';
import Content from './Content';

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
            <div className='pt-20 pb-6 w-full' id="career">
                <div ref={aboutRef} className='w-full text-center flex flex-col gap-4 items-center px-12 relative' data-aos='zoom-in-up'>
                    <h2 className='text-white/10 font-semibold 2xl:text-[200px] xl:text-[160px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-[48px]'>Career</h2>
                    {startTyping && <TypingBox center={true} color={'hue-rotate-[170deg]'} textToType="Here is my journey!" />}
                </div>
            </div>

            <div className="sticky_parent w-full">
                <div className="sticky">
                    <div className="scroll_section">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;

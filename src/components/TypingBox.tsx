import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoSparklesSharp } from 'react-icons/io5';

interface TypingBoxProps {
    textToType: string;
    center?: boolean;
    color?: string;
}

const TypingBox: React.FC<TypingBoxProps> = ({ textToType, center, color }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 700 });
        let timeoutId: NodeJS.Timeout;
        const typeText = () => {
            if (currentIndex <= textToType.length) {
                setDisplayedText(textToType.substring(0, currentIndex));
                setCurrentIndex(prevIndex => prevIndex + 1);
                timeoutId = setTimeout(typeText, 30);
            }
        };
        timeoutId = setTimeout(typeText, 40);
        return () => clearTimeout(timeoutId);
    }, [textToType, currentIndex]);

    return (
        <div className={`rounded-xl rounded-tl-none pt-[1.4px] pl-[1.6px] pb-[1.3px] pr-[1px] flex items-center justify-center ${color ? color : ''} !m-0 bg-gradient-to-t from-purple-500 max-w-[500px] w-fit to-purple-900 overflow-hidden`}>
            <div className='max-w-[500px] bg-[#11061f] rounded-xl rounded-tl-none p-3 flex gap-2 relative overflow-hidden'>
                <IoSparklesSharp className='md:text-2xl text-lg' />
                <div className={`w-11/12 ${center ? 'flex items-center justify-center' : ''}`}>
                    <div className='text-purple-200 font-extralight md:text-lg text-sm w-fit'>
                        {displayedText}
                        <span className='cursor-blink'>|</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypingBox;

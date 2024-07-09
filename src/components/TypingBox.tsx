import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoSparklesSharp } from 'react-icons/io5';

interface TypingBoxProps {
    textToType: string;
}

const TypingBox: React.FC<TypingBoxProps> = ({ textToType }) => {
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const typingSpeed = 50; // Adjust typing speed in milliseconds

    useEffect(() => {
        AOS.init({ duration: 700 });

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < textToType.length) {
                setTypedText((prev) => prev + textToType[charIndex]);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false); // Typing completed
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [textToType]);

    return (
        <div className='max-w-[500px] bg-purple-900/20 rounded-md border border-purple-700 p-3 flex gap-2 relative overflow-hidden'>
            <IoSparklesSharp className='text-2xl' />
            <div className='w-11/12'>
                <div className='text-white font-thin text-lg w-fit' id='typed-text'>
                    {typedText}{isTyping && <span className='cursor-blink'>{"|"}</span>}
                </div>
            </div>
        </div>
    );
};

export default TypingBox;

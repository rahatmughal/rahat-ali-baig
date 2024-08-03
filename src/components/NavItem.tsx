import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  hoverText: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, hoverText }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const splitText = (text: string) => {
    if (!text) return []; // Guard clause to prevent split on undefined
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char}
      </span>
    ));
  };

  useEffect(() => {
    if (textRef.current) {
      const chars = splitText(text);
      const hoverChars = splitText(hoverText);

      // Clear the container
      textRef.current.innerHTML = "";

      // Create the normal text container
      const normalTextContainer = document.createElement("div");
      normalTextContainer.className = `absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out ${isHovered ? 'transform translate-y-[-100%]' : ''}`;
      normalTextContainer.innerHTML = chars.join('');
      textRef.current.appendChild(normalTextContainer);

      // Create the hidden text container
      const hiddenTextContainer = document.createElement("div");
      hiddenTextContainer.className = `absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out ${isHovered ? 'top-0' : 'top-full'}`;
      hiddenTextContainer.innerHTML = hoverChars.join('');
      textRef.current.appendChild(hiddenTextContainer);
    }
  }, [text, hoverText, isHovered]);

  return (
    <div
      ref={textRef}
      className="relative inline-block overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default AnimatedText;

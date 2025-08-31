
import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  const glitchClasses1 = glitch ? 'opacity-80 translate-x-1 -translate-y-1' : 'opacity-0';
  const glitchClasses2 = glitch ? 'opacity-80 -translate-x-1 translate-y-1' : 'opacity-0';

  return (
    <h1 className="text-3xl md:text-5xl font-bold relative inline-block my-4">
      <span className={`absolute inset-0 text-[#ff003c] transition-all duration-100 ease-in-out ${glitchClasses1}`} aria-hidden="true">{text}</span>
      {text}
      <span className={`absolute inset-0 text-[#00ff41] transition-all duration-100 ease-in-out ${glitchClasses2}`} aria-hidden="true">{text}</span>
    </h1>
  );
};

export default GlitchText;

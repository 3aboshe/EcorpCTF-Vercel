
import React, { useState, useEffect } from 'react';
import { SUCCESS_HEADING, SUCCESS_SUBHEADING, SUCCESS_FLAG } from '../constants';

const FsocietyMask: React.FC = () => (
  <img
    src="/mask.png"
    alt="FSociety Mask"
    className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"
  />
);


const Success: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <FsocietyMask />
        <div className="text-center mt-8">
            <h2 className="text-2xl md:text-4xl text-white mb-2">{SUCCESS_HEADING}</h2>
            <p className="text-lg md:text-xl text-[#cccccc] mb-8">{SUCCESS_SUBHEADING}</p>
            <p className="bg-[#111] border border-[#00ff41] text-[#00ff41] p-4 text-xl inline-block">{SUCCESS_FLAG}</p>
        </div>
    </div>
  );
};

export default Success;

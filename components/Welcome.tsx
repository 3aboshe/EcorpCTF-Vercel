
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import { WELCOME_TEXT, WELCOME_PROMPT_LINK } from '../constants';

const BlinkingCursor: React.FC = () => (
  <span className="inline-block w-2 h-5 bg-[#00ff41] animate-pulse ml-1" />
);

const Welcome: React.FC = () => {
  const [showLink, setShowLink] = useState(false);

  const { displayText, isComplete } = useTypewriter(WELCOME_TEXT, 25, () => {
    setTimeout(() => setShowLink(true), 500);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-4xl">
        <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
          {displayText}
          {!isComplete && <BlinkingCursor />}
        </pre>
        {showLink && (
          <div className="mt-8 text-center animate-pulse">
            <Link to="/login" className="text-[#00ff41] border border-[#00ff41] px-4 py-2 hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-300">
              {WELCOME_PROMPT_LINK}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;

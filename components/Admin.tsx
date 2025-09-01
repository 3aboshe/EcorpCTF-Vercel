
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import { MELTDOWN_SEQUENCE, CORP_ADMIN_HEADING, CORP_ADMIN_DESC, CORP_ADMIN_BUTTON, CORP_ADMIN_WARNING } from '../constants';

const BlinkingCursor: React.FC = () => (
    <span className="inline-block w-2 h-5 bg-[#00ff41] animate-pulse ml-1" />
);

const Admin: React.FC = () => {
  const [meltdownActive, setMeltdownActive] = useState(false);
  const navigate = useNavigate();

  const { displayText, isComplete } = useTypewriter(MELTDOWN_SEQUENCE, 50, () => {
    setTimeout(() => navigate('/$2a$12$ddM4fTZK3M74mjZm8grLDef'), 1500);
  });

  const initiateMeltdown = () => {
    setMeltdownActive(true);
  };

  if (meltdownActive) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div id="meltdown-terminal" className="w-full max-w-4xl">
            <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
                {displayText}
                {!isComplete && <BlinkingCursor />}
            </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-100 font-sans text-gray-900">
        <div className="flex justify-center p-4 md:p-8">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg mt-8 text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-red-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">{CORP_ADMIN_HEADING}</h1>
                <p className="text-gray-600 my-4">{CORP_ADMIN_DESC}</p>
                <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 my-6 text-left">
                    <p className="font-bold">Danger Zone</p>
                    <p className="text-sm">{CORP_ADMIN_WARNING}</p>
                </div>

                <button
                    onClick={initiateMeltdown}
                    className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                >
                    {CORP_ADMIN_BUTTON}
                </button>
            </div>
        </div>
    </div>
  );
};

export default Admin;

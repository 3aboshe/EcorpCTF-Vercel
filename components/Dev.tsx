
import React, { useState } from 'react';

const Dev: React.FC = () => {
  const [showMemo, setShowMemo] = useState(false);

  const handleMemoClick = () => {
    setShowMemo(true);
  };

  if (showMemo) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono p-5" dir="ltr">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <button 
              onClick={() => setShowMemo(false)}
              className="text-[#00ff41] hover:text-[#00ff41] hover:bg-[#00ff41] hover:bg-opacity-10 px-3 py-1 border border-[#00ff41] transition-all duration-300"
            >
              ← Back to Dev Portal
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-left">
{`To: Development Team
From: Bill

Subject: Temporary Portal Login Credentials

Team, for the millionth time, stop leaving experimental folders on the server! I've reset the admin login credentials.

username: tyrellw
password: 3r@s3_UrS3lf!

Serious note: Terry, I swear I'll fire you myself if you don't delete this folder (/dev/) before launch day!`}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono overflow-x-hidden flex items-center justify-center" dir="ltr">
      <div className="p-5">
        <div className="max-w-[800px] mx-auto p-5 border border-[#00ff41] bg-[#00ff41] bg-opacity-5">
          <h1 className="text-4xl text-center mb-8 animate-pulse" style={{
            textShadow: '2px 2px 4px rgba(0, 255, 65, 0.5)'
          }}>
            --= DEV AREA - RESTRICTED =--
          </h1>
          
          <p className="text-xl leading-relaxed mb-8 text-left">
            Internal development resources and temporary notes.
          </p>
          
          <p className="text-xl leading-relaxed mb-8 text-left">
            ⚠️ WARNING: This area contains sensitive development information. Access is restricted to authorized personnel only.
          </p>
          
          <button
            onClick={handleMemoClick}
            className="block w-full text-center no-underline text-[#00ff41] border-2 border-[#00ff41] p-4 mt-8 transition-all duration-300 hover:bg-[#00ff41] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]"
          >
            <h3 className="m-0 text-xl font-bold">
              &gt;&gt;&gt; View Latest Dev Notes &lt;&lt;&lt;
            </h3>
          </button>
          
          <div className="text-[#ff4444] text-sm mt-5 text-center">
            [SYSTEM] Unauthorized access attempts will be logged and reported.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;

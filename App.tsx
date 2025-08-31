
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Dev from './components/Dev';
import Admin from './components/Admin';
import Success from './components/Success';
import Scanlines from './components/Scanlines';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#00ff41] min-h-screen font-mono relative overflow-hidden">
      <Scanlines />
      <div className="relative z-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/$2a$12$KJywhIRpfbNU5V26wXaz7" element={<Admin />} />
            <Route path="/$2a$12$ddM4fTZK3M74mjZm8grLDef" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

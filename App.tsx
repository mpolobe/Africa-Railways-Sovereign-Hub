
import React, { useState } from 'react';
import ReportForm from './components/ReportForm';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-0 md:p-12 overflow-hidden transition-colors duration-500 bg-[#0a0a0a]">
      {/* Smartphone Device Frame */}
      <div className="relative w-full max-w-[400px] aspect-[9/19.5] md:h-[850px] rounded-[3.5rem] border-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col scale-[0.9] md:scale-100 transition-all duration-500 bg-[#121212] border-[#1f1f1f] shadow-[0_0_0_2px_#2a2a2a]">
        
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-10 z-[100] flex justify-center pointer-events-none">
          <div className="mt-2 w-32 h-7 bg-black rounded-full flex items-center justify-end px-3 gap-1.5 shadow-inner">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-14 px-8 pt-4 flex justify-between items-center bg-transparent z-[90] shrink-0 pointer-events-none">
          <span className="text-[13px] font-bold leading-none text-white">9:41</span>
          <div className="flex gap-1.5 items-center">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="white" className="opacity-90">
              <path d="M1 10.5C1 10.2239 1.22386 10 1.5 10H14.5C14.7761 10 15 10.2239 15 10.5V11.5H1V10.5Z" />
              <path opacity="0.4" d="M1 6.5C1 6.22386 1.22386 6 1.5 6H14.5C14.7761 6 15 6.22386 15 6.5V7.5H1V6.5Z" />
              <path opacity="0.2" d="M1 2.5C1 2.22386 1.22386 2 1.5 2H14.5C14.7761 2 15 2.22386 15 2.5V3.5H1V2.5Z" />
            </svg>
            <div className="w-6 h-3 border-[1.5px] rounded-[3px] relative flex items-center px-[1.5px] border-white/40">
              <div className="h-full w-[80%] rounded-[1px] bg-white"></div>
              <div className="absolute -right-[3.5px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 rounded-r-full bg-white/40"></div>
            </div>
          </div>
        </div>

        {/* Main Viewport */}
        <div className="flex-grow overflow-y-auto no-scrollbar relative transition-colors duration-500 bg-[#121212]">
          {isLoggedIn ? (
            <ReportForm onLogout={() => setIsLoggedIn(false)} />
          ) : (
            <LoginPage onLogin={() => setIsLoggedIn(true)} />
          )}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full z-[100] backdrop-blur-md bg-white/30"></div>

        {/* Physical Button Mockups (Side) */}
        <div className="absolute -left-[14px] top-32 w-[3px] h-16 rounded-l-md border-r bg-[#1a1a1a] border-white/5"></div>
        <div className="absolute -left-[14px] top-52 w-[3px] h-16 rounded-l-md border-r bg-[#1a1a1a] border-white/5"></div>
        <div className="absolute -right-[14px] top-40 w-[3px] h-24 rounded-r-md border-l bg-[#1a1a1a] border-white/5"></div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(30,124,145,0.05),transparent)] pointer-events-none"></div>
    </div>
  );
};

export default App;

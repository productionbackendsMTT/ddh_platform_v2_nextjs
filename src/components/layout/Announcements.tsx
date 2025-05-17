import React from 'react';

const Announcements = () => {
  return (
    <div className="relative portrait:pt-[3vh] portrait:pb-[1vh] landscape:pb-[1vw] landscape:pt-[4.5vw] overflow-hidden">
      {/* Marquee wrapper with fade using percentage */}
      <div className="relative text-white w-[60%] mx-auto py-[.1vw] border-t-2 border-b-2 border-[#FBDA85] overflow-hidden whitespace-nowrap 
        bg-[linear-gradient(to_right,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_20%,_rgba(0,0,0,0.5)_80%,_rgba(0,0,0,0)_100%)]">
        
        {/* Scrolling text */}
        <div className="animate-marquee announcement-text portrait:text-[1.5vh] landscape:text-[1.5vw] lg:landscape:text-[1vw] inline-block">
          <span className="mx-4">🔥 Big Tournament Today! Don’t Miss It! 🔥</span>
          <span className="mx-4">🚀 New Games Released This Week! 🚀</span>
          <span className="mx-4">💰 Claim Your Daily Bonus Now! 💰</span>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

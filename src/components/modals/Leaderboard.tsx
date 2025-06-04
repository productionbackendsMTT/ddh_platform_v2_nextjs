'use client';
import Image from 'next/image';
import React from 'react';

const Leaderboard = () => {

    return (
        <div
            onClick={(e) => e.stopPropagation()}
        className="bg-[#60185E] 
            z-50
                portrait:rounded-[1.5vh] landscape:rounded-[1.5vw]
                portrait:border-[.3vh] landscape:border-[.3vw] 
                border-[#B732B4] 
                portrait:shadow-[0_0_1vh_rgba(0,0,0,0.5)] landscape:shadow-[0_0_1vw_rgba(0,0,0,0.5)] 
                portrait:w-[36vh] landscape:w-[36vw]
       " >
          <Image
            src={'/assets/header/leaderboard_data.png'}
            alt='leaderboard'
            width={2000}
            height={2000}
            quality={100}
            priority
            className={`w-[80%] mx-auto h-[80%]`}
          />
        </div>
    );
};

export default Leaderboard;

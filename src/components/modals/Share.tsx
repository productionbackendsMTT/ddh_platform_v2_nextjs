'use client';
import React from 'react';
import QRCode from 'react-qr-code';

const Share = () => {
    const shareUrl = 'https://pandapower777.com/'; // Replace with your actual link

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#60185E] 
                portrait:rounded-[1.5vh] landscape:rounded-[1.5vw]
                portrait:border-[.3vh] landscape:border-[.3vw] 
                border-[#B732B4] 
                portrait:shadow-[0_0_1vh_rgba(0,0,0,0.5)] landscape:shadow-[0_0_1vw_rgba(0,0,0,0.5)] 
                portrait:px-[3vh] landscape:px-[3vw] 
                portrait:py-[2vh] landscape:py-[2vw]
                portrait:w-[36vh] landscape:w-[40vw]
                portrait:h-[auto] landscape:h-[auto]
                text-white text-center flex flex-col items-center 
                portrait:space-y-[2vh] landscape:space-y-[1.5vw]"
        >
            <h2 className="font-semibold 
                portrait:text-[2.2vh] landscape:text-[1.5vw] 
                text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400"
            >
                Share this link
            </h2>

            <div className="portrait:w-[11vh] landscape:w-[14vw]">
                <QRCode
                    className="w-full h-auto"
                    value={shareUrl}
                    viewBox="0 0 256 256"
                />
            </div>

            <p className="text-gray-200 
                portrait:text-[1.5vh] landscape:text-[.9vw] 
                break-words portrait:max-w-[30vh] landscape:max-w-[30vw]"
            >
                {shareUrl}
            </p>
        </div>
    );
};

export default Share;

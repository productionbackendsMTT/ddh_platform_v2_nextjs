'use client';
import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import Facebook from '../svg/Facebook';
import Whatsapp from '../svg/Whatsapp';
import Link from 'next/link';
import ShareTitle from '../svg/ShareTitle';

const Share = () => {
    const shareUrl = 'https://pandapower777.com/';
    const shareMessage = `Play exciting games and win amazing rewards! Check it out now: ${shareUrl}`;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <>
            <ShareTitle/>
            <div className='w-full flex flex-col items-center portrait:gap-y-[1vh] landscape:gap-y-[1vw]'>
                <div className='w-full flex items-center portrait:gap-x-[6vh] landscape:gap-x-[6vw]'>
                    <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='portrait:w-[11vh] landscape:w-[11vw] cursor-pointer hover:scale-[.9] transition-all'
                    >
                        <Facebook />
                    </Link>

                    <Link
                        href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='portrait:w-[12.3vh] landscape:w-[12.3vw] cursor-pointer hover:scale-[.9] transition-all'
                    >
                        <Whatsapp />
                    </Link>
                </div>

                <div className='flex items-center justify-center portrait:pt-[3vh] landscape:pt-[3vw] portrait:gap-x-[.5vh] landscape:gap-x-[.5vw]'>
                    <span className='text-gray-700 portrait:text-[1vh] landscape:text-[1vw] portrait:border-[.2vh] landscape:border-[.2vw] border-amber-400 bg-gray-100 portrait:px-[2.5vh] landscape:px-[2.5vw] portrait:py-[.5vh] landscape:py-[.5vw]'>
                        {shareUrl}
                    </span>
                    <button
                        onClick={handleCopy}
                        className='portrait:px-[1vh] landscape:px-[1vw] portrait:py-[.5vh] portrait:text-[1vh]  landscape:text-[1vw] landscape:py-[.5vw] bg-blue-500 text-white bg-gradient-to-r border-amber-400 portrait:border-[.2vh] landscape:border-[.2vw] from-[#E943FF] to-[#ED54FF] hover:brightness-150 transition-all'
                    >
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Share;
'use client';
import React, { useState } from 'react';

const Announcement = () => {
    const [activeTab, setActiveTab] = useState<'announcement' | 'broadcast'>('announcement');

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
                portrait:w-[40vh] landscape:w-[40vw]
                text-white text-center flex flex-col items-center
                portrait:space-y-[2vh] landscape:space-y-[1.5vw]"
        >
            {/* Tabs */}
            <div className="flex justify-center gap-[2vh] mb-[1vh]">
                {['announcement', 'broadcast'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as 'announcement' | 'broadcast')}
                        className={`
                            px-[2.5vh] portrait:py-[.8vh] landscape:px-[2.5vw] landscape:py-[0.8vw]
                            portrait:text-[1vh] landscape:text-[1vw] font-bold 
                            rounded-full transition-all duration-300 ease-in-out
                            border border-pink-500 shadow-sm
                            cursor-pointer 
                            ${activeTab === tab
                                ? 'bg-[#B732B4] text-white shadow-[0_0_10px_rgba(255,192,203,0.7)] scale-105'
                                : 'bg-[#783778] text-white hover:bg-[#8d4690] hover:scale-105'}
                        `}
                    >
                        {tab === 'announcement' ? 'Announcements' : 'Broadcast'}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'announcement' ? (
                <div className="w-full text-left">
                    <h3 className="portrait:text-[1.2vh] landscape:text-[1.2vw] font-bold  portrait:mb-[1vw] landscape:mb-[1vh] text-yellow-300">
                        📢 Latest Announcement
                    </h3>
                    <p className="portrait:text-[.9vh] landscape:text-[.9vw] text-gray-200 leading-snug">
                        🎉 Welcome to PandaPower777! Enjoy the latest features and updated gaming experience. Stay tuned for upcoming tournaments and daily rewards!
                    </p>
                </div>
            ) : (
                <div className="w-full text-left">
                    <h3 className="portrait:text-[1.2vh] landscape:text-[1.2vw] font-bold portrait:mb-[1vw] landscape:mb-[1vh] text-green-300">
                        📡 Broadcast Message
                    </h3>
                    <p className="portrait:text-[.9vh] landscape:text-[.9vw] text-gray-200 leading-snug">
                        🔔 Don’t miss our live broadcast events every Saturday at 8 PM! Exclusive giveaways and live chat with streamers.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Announcement;

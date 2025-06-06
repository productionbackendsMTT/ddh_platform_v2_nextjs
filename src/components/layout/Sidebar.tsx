'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SidebarBg from '../svg/SidebarBg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [category, setCategory] = useState('all');
    const router=useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        router.push(`?category=${category}`);
    },[category])

    const sidebar = [
        {
            name: 'all',
            icon: '/assets/images/all.png'
        },
        {
            name: 'slots',
            icon: '/assets/images/slot.png'
        },
        {
            name: 'favorite',
            icon: '/assets/images/favr.png'
        },
        {
            name: 'keno',
            icon: '/assets/images/keno.png'
        },
        {
            name: 'other',
            icon: '/assets/images/others.png'
        }
    ]

    return (
        <>
            {/* Overlay */}
            {/* {isOpen && <div className={`absolute inset-0 bg-black opacity-70 z-[9] ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>} */}
            {isOpen&&(<div className="absolute bottom-0  portrait:h-[100vw] landscape:h-[100vh] portrait:left-[-3.2vh] landscape:left-[-3.2vw] portrait:w-[30dvh] landscape:w-[30dvw] z-[10] overflow-hidden">
                {/* Rotating SidebarBg with spring animation */}
                {isOpen && <motion.div
                    initial={{ rotate: 180 }}
                    animate={{ rotate: !isOpen ? -180 : 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                    }}
                    className={`absolute ${isOpen ? 'portrait:translate-x-[0vh] landscape:translate-x-[0vw]' : 'portrait:translate-x-[-2vh] landscape:translate-x-[-2vw]'} inset-0 origin-left`}
                >
                    <SidebarBg />
                    <div className='absolute top-[15%] py-[2vw]   w-[95%]  h-full'>
                        {
                            sidebar.map((item, index) => (
                                <button onClick={() => setCategory(item?.name)} key={index} className={`${category === item?.name ? 'bg-[#D9D9D91A]' : 'opacity-75'} group transition-all portrait:gap-y-[.5vh] landscape:gap-y-[.5vw] flex-col  w-full flex justify-center hover:bg-[#D9D9D91A] cursor-pointer  px-[1.5vw] `}>
                                    <div className='flex items-center justify-start portrait:gap-x-[1.5vh] hover:scale-110 landscape:gap-x-[1.5vw] w-[75%] portrait:pl-[5vh] landscape:pl-[5vw] portrait:py-[.8vh] landscape:py-[.8vw]'>
                                        <Image src={item.icon} alt={item.name} width={2000} height={2000} priority quality={100} className="portrait:w-[4.1vh] portrait:h-[3.6vh] landscape:w-[4.1vw] landscape:h-[3.6vw]" />
                                        <span className={`text-white  ${category === item?.name ? 'portrait:text-[1.6vh] landscape:text-[1.6vw]' : ' landscape:text-[1.4vw] portrait:text-[1.4vh] text-white/50'} portrait:group-hover:text-[1.6vh] landscape:group-hover:text-[1.6vw] capitalize`}>{item?.name}</span>
                                    </div>
                                    <svg className='w-[78%] justify-center' viewBox="0 0 299 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1H298" stroke="url(#paint0_linear_37_964)" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_37_964" x1="1" y1="1.5" x2="298" y2="1.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#666666" stopOpacity="0" />
                                                <stop offset="0.5" stopColor="white" />
                                                <stop offset="1" stopColor="#666666" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                            ))
                        }
                    </div>
                </motion.div>}

                {/* Static Button */}
               
            </div>)}
            <div className="absolute z-[50] bottom-0 portrait:pb-[.8vh]  landscape:pb-[.8vw] portrait:left-[5vh] landscape:left-[5vw]">
                    <div className="relative w-fit h-fit">
                        {/* Ripple Ring */}
                        <span className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-ping rounded-full landscape:border-[.2vw] portrait:border-[.2vw] border-[#F24CFF] portrait:w-[3vh] portrait:h-[3vh] landscape:w-[3vw] landscape:h-[3vw]"></span>

                        {/* Button */}
                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            className="relative z-10"
                        >
                            <Image
                                src="/assets/images/sidebar_btn.png"
                                alt="sidebar_btn"
                                width={1000}
                                height={1000}
                                quality={100}
                                className={`portrait:w-[4.5vh] ${isOpen?'rotate-180':'roate-0'} cursor-pointer transition-all landscape:w-[4.5vw]`}
                            />
                        </button>
                    </div>
                </div>
        </>
    );
};

export default Sidebar;

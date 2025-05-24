'use client'
import Image from 'next/image'
import React from 'react'
import Modal from './Modal';
import LogoutModal from '../modals/logoutModal';
import Share from '../modals/Share';
import Announcement from '../modals/Announcement';
import Leaderboard from '../modals/Leaderboard';

const Header = () => {
    const [modalContent, setModalContent] = React.useState('');
    let modalComponent;
    switch (modalContent) {
        case 'logout':
            modalComponent = <LogoutModal />
            break;
        case 'share':
            modalComponent = <Share />
            break;
        case 'announcement':
            modalComponent = <Announcement />
            break;
            case 'leaderboard':
                modalComponent = <Leaderboard />
                break;
    }

    return (
        <>
            <div className='relative z-[99]'>
                <Image src={'/assets/header/header_bg.png'} alt='header_bg' width={2000} height={500} quality={100} className='portrait:w-[100vh] landscape:w-[100vw] landscape:h-[6vw] lg:landscape:h-[5vw] portrait:h-[7vh]' />
                <div className='absolute flex z-50 landscape:px-[2vw] portrait:px-[2vh] justify-between top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-full h-full'>
                    {/* Profile */}
                    {/* Profile */}
                    <div className='landscape:py-[.3vw] portrait:py-[.3vh]'>
                        <div className='flex portrait:space-x-[.8vh] items-center landscape:space-x-[.8vw]'>
                            <Image
                                src={'/assets/header/profile.png'}
                                alt='profile'
                                width={200}
                                height={200}
                                quality={100}
                                className='portrait:w-[5.5vh] landscape:w-[4vw]'
                            />
                            <div className="flex flex-col">
                                <div className="text-transparent leading-tight bg-clip-text bg-gradient-to-b from-[#A98E44] via-[#F9F2DB] to-[#D7BF7C] font-semibold portrait:text-[1.3vh] landscape:text-[1.3vw] lg:landscape:text-[1.1vw]">
                                    Gaurav Kumar
                                </div>
                                <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#C79F28] via-[#FFE650] via-50% to-[#FFE650] font-semibold portrait:text-[1.2vh] landscape:text-[1.2vw] lg:landscape:text-[.9vw]">
                                    67364
                                </div>
                                {/* Level & XP */}

                            </div>
                            <div className="mt-[0.3vh] pl-[1.5vw] landscape:w-[13vw] portrait:w-[13vh]">
                                <div className="flex items-center justify-between text-white font-semibold landscape:text-[.9vw] portrait:text-[.8vh] mb-[0.3vh]">
                                    <span className="text-yellow-400 drop-shadow-[0_0_3px_rgba(255,215,0,0.8)]">Level 2</span>
                                    <span className="portrait:text-[.8vh] landscape:text-[.7vw] text-gray-200 font-medium">30 / 100 XP</span>
                                </div>
                                <div className="relative w-full h-[0.7vh] landscape:h-[0.55vw] bg-[#2d2d2d] rounded-full overflow-hidden shadow-inner border border-yellow-500/30">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r italic from-yellow-300 via-orange-400 to-orange-600 rounded-full shadow-[0_0_8px_rgba(255,186,0,0.7)] transition-all duration-500 ease-in-out"
                                        style={{ width: '30%' }}
                                    />
                                </div>
                            </div>
                            <button onClick={() => setModalContent('leaderboard')} className='pl-[2vw] cursor-pointer'>
                                <Image
                                    src={'/assets/header/leaderboard.png'}
                                    alt='profile'
                                    width={200}
                                    height={200}
                                    quality={100}
                                    className='portrait:w-[5.5vh] landscape:w-[3vw] '
                                />
                            </button>
                        </div>
                    </div>

                    {/* logo */}
                    <Image
                        src={'/assets/header/logo.png'}
                        alt='logo'
                        width={2000}
                        height={2000}
                        quality={100}
                        className="absolute  top-0  left-[50%] translate-x-[-50%] portrait:w-[17vh] landscape:w-[17vw]"
                    />
                    {/* settings */}
                    <div className='flex items-center portrait:space-x-[4vh] landscape:space-x-[3vw]'>
                        <button onClick={() => setModalContent('share')}>
                            <Image src={'/assets/header/share.png'} alt='share' width={200} height={200} quality={100} className='portrait:w-[3.5vh] hover:scale-110 transition-all cursor-pointer landscape:w-[3vw]' />
                        </button>
                        <button onClick={() => setModalContent('announcement')}>
                            <Image src={'/assets/header/announcement.png'} alt='announcement' width={200} height={200} quality={100} className='portrait:w-[5.5vh] landscape:w-[5vw] hover:scale-110 transition-all cursor-pointer' />
                        </button>
                        <button onClick={() => setModalContent('logout')}>
                            <Image src={'/assets/header/setting.png'} alt='setting' width={200} height={200} quality={100} className='portrait:w-[3.5vh] landscape:w-[3vw] hover:scale-110 transition-all cursor-pointer' />
                        </button>
                    </div>
                </div>
            </div>
            {modalContent && <Modal closeModal={() => setModalContent('')}>{modalComponent}</Modal>}
        </>
    )
}

export default Header

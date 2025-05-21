'use client'
import Image from 'next/image'
import React from 'react'
import Modal from './Modal';
import LogoutModal from '../modals/logoutModal';

const Header = () => {
    const [modalContent, setModalContent] = React.useState('');
    let modalComponent;
    switch (modalContent) {
        case 'logout':
            modalComponent = <LogoutModal />
            break;
    }

    return (
        <>
            <div className='relative'>
                <Image src={'/assets/header/header_bg.png'} alt='header_bg' width={2000} height={500} quality={100} className='portrait:w-[100vh] landscape:w-[100vw] landscape:h-[6vw] lg:landscape:h-[5vw] portrait:h-[7vh]' />
                <div className='absolute flex z-50 landscape:px-[2vw] portrait:px-[2vh] justify-between top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-full h-full'>
                    {/* Profile */}
                    <div className='landscape:py-[.3vw] portrait:py-[.3vh]'>
                        <div className='flex portrait:space-x-[.8vh] items-center landscape:space-x-[.8vw]'>
                            <Image src={'/assets/header/profile.png'} alt='profile' width={200} height={200} quality={100} className='portrait:w-[5.5vh] landscape:w-[4vw]' />
                            <div className="flex flex-col">
                                <div className="text-transparent leading-tight bg-clip-text bg-gradient-to-b from-[#A98E44] via-[#F9F2DB] to-[#D7BF7C] font-semibold portrait:text-[1.3vh] landscape:text-[1.3vw] lg:landscape:text-[1.1vw]">
                                    Gaurav Kumar
                                </div>
                                <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#C79F28] via-[#FFE650] via-50% to-[#FFE650] font-semibold portrait:text-[1.2vh] landscape:text-[1.2vw] lg:landscape:text-[.9vw]">
                                    67364
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* logo */}
                    <Image src="/assets/images/Logo.png" alt="login_logo" height={1000} width={1000} quality={100} priority className="absolute  top-0  left-[50%] translate-x-[-50%] portrait:w-[17vh] landscape:w-[15vw]" />
                    {/* settings */}
                    <div className='flex items-center portrait:space-x-[4vh] landscape:space-x-[3vw]'>
                        <Image src={'/assets/header/share.png'} alt='share' width={200} height={200} quality={100} className='portrait:w-[3.5vh] hover:scale-110 transition-all cursor-pointer landscape:w-[3vw]' />
                        <Image src={'/assets/header/announcement.png'} alt='announcement' width={200} height={200} quality={100} className='portrait:w-[5.5vh] landscape:w-[5vw] hover:scale-110 transition-all cursor-pointer' />
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

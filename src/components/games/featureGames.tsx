'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

const FeatureGames = () => {
    return (
        <div className=''>
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="portrait:w-[20vh] landscape:w-[20vw] border">
                <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index}>
                            {/* Container for video and GameCard */}
                            <div className="relative portrait:w-[17vh]  portrait:h-[28vh] landscape:w-[17vw] landscape:h-[28vw]">
                                {/* Video */}

                                <GameCard
                                    isFrame={true}
                                    ImageClass={'portrait:rounded-[1.5vh]  portrait:p-[.28vh] landscape:p-[.28vw] landscape:rounded-[1.5vw]'}
                                    StylesClass={'absolute top-[8%] left-[50.5%] translate-x-[-50%] z-[10]  w-[80%] h-[83%] portrait:rounded-[1.5vh] landscape:rounded-[1.5vw]'}
                                />

                                <video
                                    src={'/assets/video/frame.mp4'}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full  h-full portrait:rounded-[2.5vh] z-[-3] absolute top-0 landscape:rounded-[2.5vw]"
                                />

                                <Image src={'/assets/video/gradient.svg'} alt='gradient' width={2000} height={2000} quality={100} className='absolute top-0 left-0 w-full h-full z-[1]' />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default FeatureGames
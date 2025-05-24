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
import useStore from '@/app/zustand/Store'

const FeatureGames = () => {
    const isSwiped = useStore((state) => state.initialState.isSwiped)

    return (
        !isSwiped && <div className=''>
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="portrait:w-[20vh]  landscape:w-[20vw]">
                <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div
                                key={index}
                                className="relative"
                            >
                                <GameCard
                                    isFrame={false}
                                    ImageClass="portrait:rounded-[5vh]  py-[.3vw] landscape:rounded-[5vw]"
                                    StylesClass="portrait:w-[17vh] portrait:h-[27vh] landscape:w-[17vw] landscape:h-[27vw]   portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default FeatureGames
'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const FeatureGames = () => {
    return (
        <div className=''>
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="portrait:w-[20vh] landscape:w-[20vw]">
                <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index} >

                                <div className='bg-[#9e229c]  portrait:w-[15.7vh]  portrait:h-[25.8vh] portrait:rounded-[3.5vh] portrait:p-[.37vh] landscape:p-[.37vw] landscape:rounded-[3.4vw] landscape:w-[15.7vw] landscape:h-[25.8vw]'>
                                    <GameCard isFrame={true} key={index} ImageClass={'portrait:rounded-[3.5vh] portrait:p-[.35vh] landscape:p-[.35vw] landscape:rounded-[3.4vw]'} StylesClass={'portrait:w-[15vh] bg-transparant portrait:h-[25vh] landscape:w-[15vw] landscape:h-[25vw]'} />
                                </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default FeatureGames

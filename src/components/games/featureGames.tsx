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

                            {/* <div className="animated-border-box portrait:w-[15vh]! bg-transparant portrait:h-[25vh]! landscape:w-[15vw]!  landscape:h-[25vw]!">
                            </div> */}
                               <GameCard isFrame={true} key={index} ImageClass={'portrait:rounded-[3.5vh] z-[10] portrait:p-[.28vh] landscape:p-[.28vw]  landscape:rounded-[3.4vw]'} StylesClass={'portrait:w-[15vh] portrait:h-[25vh] landscape:w-[15vw] landscape:h-[25vw] bg-[#F599E5] border-[#B732B4]   portrait:border-[.3vh] landscape:border-[.3vw]  portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]'} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default FeatureGames

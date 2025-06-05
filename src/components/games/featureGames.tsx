'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import Autoplay from "embla-carousel-autoplay"
import useStore from '@/app/zustand/Store'
import { Carousel, CarouselContent, CarouselItem } from '../ui/featuredGameCarousel'
import { NormalGamesProps } from '@/lib/type'

const FeatureGames = ({ featuregame }: { featuregame: NormalGamesProps[] }) => {
    const isSwiped = useStore((state) => state.initialState.SwipedIndex)

    return (
        (isSwiped === 0) && <div className=''>
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="portrait:w-[20vh]  landscape:w-[20vw]">
                <CarouselContent>
                    {featuregame.map((game, index) => (
                            <CarouselItem key={index}>
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    <GameCard
                                        frame={'/assets/images/boder.webp'}
                                        games={game}
                                        isFrame={false}
                                        ImageClass="portrait:rounded-[5.5vh]  landscape:rounded-[5.5vw] portrait:p-[.6vh] landscape:p-[.6vw]"
                                        StylesClass="portrait:w-[19.7vh] portrait:h-[32vh] landscape:w-[19.7vw] landscape:h-[32vw]   portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]"
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
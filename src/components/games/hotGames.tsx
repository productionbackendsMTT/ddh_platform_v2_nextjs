'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import useStore from '@/app/zustand/Store'

const HotGames = () => {
  const isSwiped = useStore((state) => state.initialState.isSwiped)
  const hotGame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  const chunkArray = (arr: any, size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedHotGames = chunkArray(hotGame, 6);

  return (
   !isSwiped && <Carousel

      className="portrait:pt-[2vh]   portrait:px-[2vh] landscape:px-[2vw] landscape:pt-[2vw] bg-[url('/assets/images/hotgames_bg.png')] bg-cover bg-no-repeat bg-center portrait:w-[29vh] portrait:h-[26vh] landscape:w-[29vw] landscape:h-[26vw]"
    >
      <Image src={'/assets/images/hot_games_text.png'} alt='hot_games_text' width={1000} height={1000} quality={100} className=' absolute portrait:top-[-2.2vh] landscape:top-[-2.2vw] left-[50%] translate-x-[-50%] portrait:w-[13vh] portrait:h-[5vh] landscape:w-[13vw] object-contain landscape:h-[5vw]' />
      <CarouselContent>
        {chunkedHotGames.map((chunk: any[], index: number) => (
          <CarouselItem
            key={index}
            className="flex flex-wrap   portrait:gap-x-[1.2vw] portrait:gap-y-[.5vw] landscape:gap-x-[1.2vw] landscape:gap-y-[.5vw] items-center justify-center"
          >
            {chunk.map((game, gameIndex) => (
              <div  key={gameIndex}>
                <GameCard
                  ImageClass={' portrait:rounded-[2vh] landscape:rounded-[2vw] portrait:py-[.2vh] landscape:py-[.2vw]'}
                  StylesClass={'portrait:w-[7vh] portrait:h-[11.2vh]  landscape:w-[7vw] landscape:h-[11.2vw]   portrait:rounded-[1.6vh] landscape:rounded-[1.6vw]'}
                />
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HotGames

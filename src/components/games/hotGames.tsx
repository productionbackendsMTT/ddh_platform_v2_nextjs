'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import Image from 'next/image'
import useStore from '@/app/zustand/Store'
import { Carousel, CarouselContent, CarouselItem } from '../ui/hotGameCarousel'

const HotGames = ({hotgame}:{ hotgame: { image: string, slug: string;  id: number}[] }) => {
  const isSwiped = useStore((state) => state.initialState.SwipedIndex)
  const hotGame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  const chunkArray = (arr: any, size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedHotGames = chunkArray(hotgame, 6);

  return (
   isSwiped===0 && <Carousel

      className="portrait:pt-[2vh]   portrait:px-[2vh] landscape:px-[2vw] landscape:pt-[2.5vw] bg-[url('/assets/images/hotgames_bg.png')] bg-cover bg-no-repeat bg-center portrait:w-[31vh] portrait:h-[28vh] landscape:w-[32vw] landscape:h-[29vw]"
    >
      <Image src={'/assets/images/hot_games_text.png'} alt='hot_games_text' width={1000} height={1000} quality={100} className=' absolute portrait:top-[-2.2vh] landscape:top-[-2.2vw] left-[50%] translate-x-[-50%] portrait:w-[13vh] portrait:h-[5vh] landscape:w-[13vw] object-contain landscape:h-[5vw]' />
      <CarouselContent>
        {chunkedHotGames.map((chunk: any[], index: number) => (
          <CarouselItem
            key={index}
            className="flex flex-wrap   portrait:gap-x-[1.5vw] portrait:gap-y-[.5vw] landscape:gap-x-[1.5vw] landscape:gap-y-[.5vw] items-center justify-center"
          >
            {chunk.map((game, gameIndex) => (
              <div  key={gameIndex}>
                <GameCard
                  frame={'/assets/images/lowGlow_Border.png'}
                  games={game}
                  ImageClass={' portrait:rounded-[1.7vh] landscape:rounded-[1.7vw] portrait:p-[.25vh] landscape:p-[.25vw]'}
                  StylesClass={'portrait:w-[7.5vh] portrait:h-[12vh]  landscape:w-[7.5vw] landscape:h-[12vw]   portrait:rounded-[1.6vh] landscape:rounded-[1.6vw]'}
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

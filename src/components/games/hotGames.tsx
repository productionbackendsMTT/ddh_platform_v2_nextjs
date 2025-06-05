'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import Image from 'next/image'
import useStore from '@/app/zustand/Store'
import { Carousel, CarouselContent, CarouselItem } from '../ui/hotGameCarousel'
import { NormalGamesProps } from '@/lib/type'

const HotGames = ({ hotgame }: { hotgame: NormalGamesProps[] }) => {
  const isSwiped = useStore((state) => state.initialState.SwipedIndex)
  const label = useStore((state) => state.initialState.label)

  const chunkArray = (arr: any, size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedHotGames = chunkArray(hotgame, 3);

  return (
    isSwiped === 0 && <Carousel
      className="portrait:pt-[2vh]   portrait:px-[2vh] landscape:px-[2vw] landscape:pt-[2.5vw] bg-[url('/assets/images/hotgames_bg.png')] bg-cover bg-no-repeat bg-center portrait:w-[31vh] portrait:h-[28vh] landscape:w-[32vw] landscape:h-[29vw]"
    >
      <Image src={'/assets/images/label.webp'} alt='hot_games_text' width={1000} height={1000} quality={100} className=' absolute portrait:top-[-2.2vh] landscape:top-[-2.2vw] left-[50%] translate-x-[-50%] portrait:w-[15vh] portrait:h-[5vh] landscape:w-[15vw] object-contain landscape:h-[5vw]' />
      <span className='absolute portrait:top-[-1.5vh] landscape:top-[-1.5vw] uppercase left-[50%] translate-x-[-50%] portrait:text-[1.3vh] landscape:text-[1.3vw] bg-gradient-to-t from-[#D7BF7C] via-[#F9F2DB] to-[#A98E44] font-bold bg-clip-text text-transparent'>{label}</span>
      <CarouselContent>
        {chunkedHotGames?.map((chunk: any[], index: number) => (
          <CarouselItem
            key={index}
            className="flex flex-wrap   portrait:gap-x-[1.5vw] portrait:gap-y-[.5vw] landscape:gap-x-[1.5vw] landscape:gap-y-[.5vw] items-center justify-center"
          >
            {chunk.map((game, gameIndex) => (
              <div key={gameIndex}>
                <GameCard
                  frame={'/assets/images/lowGlow_Border.png'}
                  games={game}
                  ImageClass={' portrait:rounded-[1.7vh] landscape:rounded-[1.7vw] portrait:p-[.29vh] landscape:p-[.29vw]'}
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

'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'

const HotGames = () => {
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
    <Carousel
     
      className="portrait:pt-[3vh] portrait:px-[2vh] landscape:px-[2vw] landscape:pt-[3vw] bg-[url('/assets/images/hotgames_bg.png')] bg-cover bg-no-repeat bg-center portrait:w-[29vh] portrait:h-[26vh] landscape:w-[29vw] landscape:h-[26vw]"
    >
      <Image src={'/assets/images/hot_games_text.png'} alt='hot_games_text' width={1000} height={1000} quality={100} className=' absolute portrait:top-[-2.2vh] landscape:top-[-2.2vw] left-[50%] translate-x-[-50%] portrait:w-[13vh] portrait:h-[5vh] landscape:w-[13vw] object-contain landscape:h-[5vw]'/>
      <CarouselContent>
        {chunkedHotGames.map((chunk: any[], index: number) => (
          <CarouselItem
            key={index}
            className="flex flex-wrap portrait:gap-[.5vh] landscape:gap-[.5vw] items-center justify-between"
          >
            {chunk.map((game, gameIndex) => (
              <GameCard
                key={gameIndex}
                ImageClass={'p-[.3vw] portrait:rounded-[2vh] landscape:rounded-[2vw]'}
                StylesClass={'portrait:w-[8vh] portrait:h-[10vh] landscape:w-[8vw] landscape:h-[10vw] bg-[#FBC7FE] border-[#B732B4]  portrait:p-[1vh] landscape:p-[1vw]  portrait:border-[.3vh] landscape:border-[.3vw]  portrait:rounded-[2vh] landscape:rounded-[2vw]'}
              />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HotGames

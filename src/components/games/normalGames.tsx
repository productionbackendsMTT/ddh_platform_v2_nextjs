'use client'
import React from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const NormalGames = () => {
  const normalGame = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];

  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;

  };

  const chunkedGames = chunkArray(normalGame, 2);

  return (
    <Carousel
      className='portrait:w-[35vh] relative  landscape:w-[35vw]'
    >
      <CarouselContent>
        {chunkedGames?.map((chunk, index) => (
          <CarouselItem key={index} className="flex justify-start gap-[1.5vh]">
            {chunk?.map((game, gameIndex) => (
              <GameCard
                key={gameIndex}
                isFrame={false}
                ImageClass={'p-[.4vw] portrait:rounded-[3.5vh] landscape:rounded-[3.5vw]'}
                StylesClass={'portrait:w-[15vh] portrait:h-[25vh] landscape:w-[15vw] landscape:h-[25vw] bg-[#FBC7FE] border-[#B732B4]  portrait:p-[1vh] landscape:p-[1vw] portrait:border-[.4vh] landscape:border-[.4vw]  portrait:rounded-[3.5vh] landscape:rounded-[3.5vw]'}
              />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='absolute top-[50%] right-[5%]'>
         <CarouselNext />
      </div>
        <div className='absolute top-[50%] left-[5%] portrait:-translate-x-[36vh] landscape:-translate-x-[36vw]'>
          <CarouselPrevious />
        </div>
    </Carousel>
  )
}

export default NormalGames

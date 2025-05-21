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
import Image from 'next/image'


const NormalGames = () => {
  const normalGame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
              <div className='portrait:border-[.3vh] relative landscape:border-[.3vw] border-[#B732B4] portrait:rounded-[3.6vh] landscape:rounded-[3.6vw]'>
                <GameCard
                  key={gameIndex}
                  isFrame={false}
                  ImageClass={' portrait:rounded-[3.5vh] landscape:rounded-[3.3vw] portrait:py-[.05vh] landscape:py-[.05vw]'}
                  StylesClass={'portrait:w-[15vh] portrait:h-[25vh] landscape:w-[15vw] landscape:h-[25vw] bg-[#FBC7FE] border-[#F599E5]  portrait:p-[1vh] landscape:p-[1vw] portrait:border-[.35vh] landscape:border-[.35vw]  portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]'}
                />
                <Image src={'/assets/images/Fav.png'} alt='fav_icon' width={200} height={200} quality={100} className='absolute cursor-pointer hover:scale-110  top-[5%] right-[9%] portrait:w-[2.5vh] portrait:h-[2.5vh] landscape:w-[2.5vw] landscape:h-[2.5vw]'/>
              </div>

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

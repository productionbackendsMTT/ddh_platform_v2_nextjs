'use client'
import React, { useState, useRef } from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

interface GameData {
  category: string;
  createdAt: string;
  description: string;
  name: string;
  order: number;
  payout: string;
  slug: string;
  status: string;
  tag: string;
  thumbnail: string;
  type: string;
  updatedAt: string;
  url: string;
  __v: number;
  _id: string;
}

interface NormalGamesProps {
  normalGames: GameData[];
}

const NormalGames = ({ normalGames }: NormalGamesProps) => {
  const [carouselWidth, setCarouselWidth] = useState('portrait:w-[35vh] landscape:w-[35vw] transition-all duration-500');
  const startX = useRef<number | null>(null);

  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedGames = chunkArray(normalGames, 2);

  // Handle both touch and mouse
  const handleStart = (x: number) => {
    startX.current = x;
  };

  const handleEnd = (x: number) => {
    if (startX.current !== null) {
      const deltaX = startX.current - x;
      if (deltaX > 30) {
        // Swiped/moved left
        setCarouselWidth('w-[92vw] transition-all duration-500');
      } else if (deltaX < -30) {
        // Swiped/moved right
        setCarouselWidth('portrait:w-[35vh] landscape:w-[35vw] transition-all duration-500');
      }
    }
    startX.current = null;
  };

  return (
    <Carousel
      className={`relative ${carouselWidth}`}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
    >
      <CarouselContent>
        {chunkedGames.map((chunk, index) => (
          <CarouselItem key={index} className="flex justify-start gap-[1.5vh]">
            {chunk.map((game) => (
              <div key={game._id} className='portrait:border-[.3vh] relative hover:scale-95 transition-all landscape:border-[.3vw] border-[#B732B4] portrait:rounded-[3.6vh] landscape:rounded-[3.6vw]'>
                <GameCard
                  games={game}
                  isFrame={false}
                  ImageClass={'portrait:rounded-[3vh] landscape:rounded-[3vw] portrait:py-[.02vh] landscape:py-[.05vw]'}
                  StylesClass={'portrait:w-[15vh] portrait:h-[25vh] landscape:w-[15vw] landscape:h-[25vw] bg-[#FBC7FE] border-[#F599E5] portrait:border-[.35vh] landscape:border-[.35vw] portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]'}
                />
                <Image
                  src={'/assets/images/Fav.png'}
                  alt='fav_icon'
                  width={200}
                  height={200}
                  quality={100}
                  className='absolute cursor-pointer hover:scale-110 top-[5%] right-[9%] portrait:w-[2.5vh] portrait:h-[2.5vh] landscape:w-[2.5vw] landscape:h-[2.5vw]'
                />
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className='absolute top-[50%] right-[5%]'>
        <CarouselNext onClick={() => setCarouselWidth('w-[92vw] transition-all duration-500')} />
      </div>
      <div className='absolute top-[50%] left-[5%] portrait:-translate-x-[36vh] landscape:-translate-x-[6vw]'>
        <CarouselPrevious onClick={() => setCarouselWidth('portrait:w-[35vh] landscape:w-[35vw] transition-all duration-500')} />
      </div>
    </Carousel>
  );
};

export default NormalGames;

'use client'
import React, { useCallback, useMemo, useEffect, useRef } from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import useStore from '@/app/zustand/Store'
import { NormalGamesProps } from '@/lib/type'



const NormalGames = ({ normalGames,isCategory }: { normalGames: NormalGamesProps[],isCategory?:undefined|string }) => {
  const isSwiped = useStore((state) => state.initialState.SwipedIndex)
  const {setSwipedIndex} = useStore()
  const invisibleTextRef = useRef<HTMLDivElement>(null)
  const chunkArray = useCallback((arr: any[], size: number) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }, [])

  const chunkedGames = useMemo(
    () => chunkArray(normalGames, ((isSwiped === 0)&&(isCategory==='all')) ? 2 : 5),
    [normalGames,isSwiped,isCategory, chunkArray]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           setSwipedIndex(0)
          }
        });
      },
      { root: null, threshold: 1.0 } 
    );

    if (invisibleTextRef.current) {
      observer.observe(invisibleTextRef.current);
    }

    return () => {
      if (invisibleTextRef.current) {
        observer.unobserve(invisibleTextRef.current);
      }
    };
  }, []);

  return (
    <Carousel
      className={`relative transition-all duration-300 ease-in-out 
        ${(isSwiped === 0)&&(isCategory==='all') ? 'portrait:w-[35vh] landscape:w-[35vw]' : 'portrait:w-[92vh] landscape:w-[92vw]'}`}
    >
      <CarouselContent>
        <div ref={invisibleTextRef} className='absolute left-[-7vw] invisible'>
          capture -1 CaRD
        </div>

        {chunkedGames.map((chunk, index) => (
          <CarouselItem
            key={index}
            className="flex justify-start portrait:gap-x-[.9vh] landscape:gap-x-[.7vw]"
          >
            {chunk.map((game) => (
              <div key={game._id} className="relative">
                <GameCard
                  frame={'/assets/images/lowGlow_Border.png'}
                  games={game}
                  isFrame={false}
                  ImageClass="portrait:rounded-[4.7vh] portrait:p-[.5vh] landscape:p-[.5vw] landscape:rounded-[4.7vw]"
                  StylesClass="portrait:w-[17vh] portrait:h-[27.5vh] landscape:w-[17vw] landscape:h-[27.5vw] portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]"
                />
                <Image
                  src="/assets/images/Fav.png"
                  alt="fav_icon"
                  width={200}
                  height={200}
                  quality={100}
                  className="absolute z-[10] cursor-pointer hover:scale-110 top-[10%] right-[10%] portrait:w-[2.5vh] portrait:h-[2.5vh] landscape:w-[2.5vw] landscape:h-[2.5vw]"
                />
                <div className="absolute z-[8] cursor-pointer hover:scale-110 top-[10%] left-[5%] rounded-tr-[1.7vw] bg-[#AD1716] border border-[#E36CD9] px-[1.4vw] py-[.4vw]"><span className='capitalize bg-gradient-to-t from-[#D7BF7C] via-[#F9F2DB] portrait:text-[.9vh] landscape:text-[.9vw] to-[#A98E44] font-bold bg-clip-text text-transparent'>{game?.type}</span></div>
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default NormalGames
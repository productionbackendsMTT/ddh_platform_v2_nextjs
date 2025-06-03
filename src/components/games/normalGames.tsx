'use client'
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel"
import Image from 'next/image'
import useStore from '@/app/zustand/Store'

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

const NormalGames = ({ normalGames }: { normalGames: NormalGamesProps[] }) => {
  
  console.log(normalGames,"normalGames")

  const { setSwiped } = useStore()
  const isSwiped = useStore((state) => state.initialState.isSwiped)
  const markerRef = useRef<HTMLDivElement>(null)
  const [api, setApi] = useState<CarouselApi | null>(null)
  const prevIndexRef = useRef(0)

  // const normalGame = useMemo(() => Array.from({ length: 18 }, (_, i) => i + 1), [])

  const chunkArray = useCallback((arr: any[], size: number) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }, [])

  const chunkedGames = useMemo(() => chunkArray(normalGames, isSwiped ? 5 : 2), [normalGames, isSwiped, chunkArray])

  // useEffect(() => {
  //   if (!isSwiped && api) {
  //     const onSelect = () => {
  //       const currentIndex = api.selectedScrollSnap();
  //       if (currentIndex !== prevIndexRef.current) {
  //         setSwiped(currentIndex < 0 ? false : true);
  //         prevIndexRef.current = currentIndex;
  //       }
  //     };

  //     api.on('select', onSelect);

  //     // Return a cleanup function
  //     return () => {
  //       api.off('select', onSelect);
  //     };
  //   }

  //   // Explicitly return undefined if the condition is not met
  //   return undefined;
  // }, [api, isSwiped, setSwiped]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.target === markerRef.current) {
  //           if (entry.isIntersecting) {
  //             setSwiped(false)
  //           } else {
  //             setSwiped(false)
  //           }
  //         }
  //       })
  //     },
  //     { root: null, rootMargin: '0px', threshold: 0.1 }
  //   )

  //   if (markerRef.current) {
  //     observer.observe(markerRef.current)
  //   }

  //   return () => {
  //     if (markerRef.current) {
  //       observer.unobserve(markerRef.current)
  //     }
  //   }
  // }, [setSwiped])

  // ${!isSwiped ? 'landscape:w-[92vw] portrait:w-[92vh]' : 'portrait:w-[35vh] landscape:w-[35vw]'
  return (
    <Carousel
      setApi={setApi}
      className={`relative  transition-all  duration-300 ease-in-out 
      landscape:w-[92vw] portrait:w-[92vh]
        }`}
    >
      <CarouselContent>
        {chunkedGames.map((chunk, index) => (
          <div key={index}>
            {index === 0 && (
              <div
                ref={markerRef}
                className="absolute right-[110%] invisible"
                aria-hidden="true"
              >
              
              </div>
            )}
            <CarouselItem className="flex justify-center portrait:gap-x-[.9vh] landscape:gap-x-[.7vw]">
              {chunk.map((game, gameIndex) => (
                <div
                  key={gameIndex}
                  className="relative "
                >
                  <GameCard
                    frame={'/assets/images/lowGlow_Border.png'}
                    games={game}
                    isFrame={false}
                    ImageClass="portrait:rounded-[4.7vh] portrait:p-[.5vh] landscape:p-[.5vw] landscape:rounded-[4.7vw]"
                    StylesClass="portrait:w-[17vh] portrait:h-[27.5vh] landscape:w-[17vw] landscape:h-[27.5vw]   portrait:rounded-[3.4vh] landscape:rounded-[3.4vw]"
                  />
                  <Image
                    src="/assets/images/Fav.png"
                    alt="fav_icon"
                    width={200}
                    height={200}
                    quality={100}
                    className="absolute z-[10] cursor-pointer hover:scale-110 top-[10%] right-[10%] portrait:w-[2.5vh] portrait:h-[2.5vh] landscape:w-[2.5vw] landscape:h-[2.5vw]"
                  />
                
                </div>
              ))}
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
      {/* <div className="absolute scale top-[50%]  portrait:right-[-6vw] landscape:right-[-2.5vw]">
        <CarouselNext />
      </div>
      <div className="absolute top-[50%]   portrait:left-[1.5vh] landscape:left-[1.5vw] portrait:-translate-x-[40vh] landscape:-translate-x-[39.5vw]">
        <CarouselPrevious />
      </div> */}
    </Carousel>
  )
}

export default NormalGames
'use client'
import React, {useCallback, useMemo } from 'react'
import GameCard from '../layout/gameCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
  _id: string;
}

interface NormalGamesProps {
  normalGames: GameData[];
}

const NormalGames = ({ normalGames }: { normalGames: NormalGamesProps[] }) => {
  const chunkArray = useCallback((arr: any[], size: number) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }, [])

  const chunkedGames = useMemo(() => chunkArray(normalGames, 5), [normalGames, chunkArray])

  return (
    <Carousel
      className={`relative  transition-all  duration-300 ease-in-out 
      landscape:w-[92vw] portrait:w-[92vh]
        }`}
    >
      <CarouselContent>
        {chunkedGames.map((chunk, index) => (
          <div key={index}>
            {index === 0 && (
              <div
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
    </Carousel>
  )
}

export default NormalGames
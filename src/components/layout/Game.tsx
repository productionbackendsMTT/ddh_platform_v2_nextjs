import React from 'react'
import FeatureGames from '../games/featureGames'
import HotGames from '../games/hotGames'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'

const Game = async () => {
  const games = await fetchGames();
  return (
    <div className='flex w-[95%] z-[99] mx-auto items-center justify-around portrait:py-[5.5vh] landscape:py-[6vw] lg:landscape:py-[8vw]'>
      <FeatureGames />
      <HotGames />
      <NormalGames normalGames={games?.data?.data} />
    </div>
  )
}

export default Game

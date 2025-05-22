import React from 'react'
import FeatureGames from '../games/featureGames'
import HotGames from '../games/hotGames'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'

const Game = async () => {
  const games = await fetchGames();
  console.log(games, "Games");
  return (
    <div className='flex w-[95%] z-[99] mx-auto items-center justify-around portrait:py-[1vh] landscape:py-[1vw]'>
      {/* <FeatureGames />
      <HotGames /> */}
      <div className='border-2 border-red-500'>
        <NormalGames normalGames={games?.data?.data} />
      </div>
    </div>
  )
}

export default Game

import React from 'react'
import FeatureGames from '../games/featureGames'
import HotGames from '../games/hotGames'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'

const Game = async () => {
  const games = await fetchGames();
  console.log(games,"Games");
  return (
    <div className='flex w-[95%] mx-auto items-center justify-around portrait:py-[1vh] landscape:py-[1vw]'>
      <FeatureGames />
      {/* <HotGames /> */}
      <NormalGames normalGames={games?.data?.data} />
    </div>
  )
}

export default Game

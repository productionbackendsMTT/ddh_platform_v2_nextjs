import React from 'react'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'
import FeatureGames from '../games/featureGames';
import HotGames from '../games/hotGames';
import { GameData} from '@/lib/type';

const Game = async () => {
  const games = await fetchGames();
  
  const featuregame = games?.data?.data?.filter((game:GameData) => game.type === 'promoted');
  const normalGames = games?.data?.data
  return (
    <div className='flex w-[98%] z-[8] mx-auto items-center justify-between portrait:px-[2.6vh] landscape:px-[2vw] portrait:gap-x-[3.5vh] landscape:gap-x-[3.5vw]'>
      <FeatureGames featuregame={featuregame} />
      <div className='flex items-center justify-between  portrait:gap-x-[2.3vh] landscape:gap-x-[2.3vw]'>
        <HotGames hotgame={games?.data?.data} />
        <NormalGames normalGames={normalGames} />
      </div>
    </div>
  )
}

export default Game

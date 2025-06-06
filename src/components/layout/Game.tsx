import React from 'react'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'
import FeatureGames from '../games/featureGames';
import HotGames from '../games/hotGames';
import { GameData} from '@/lib/type';

const Game = async (category: { category: string }) => {
  const games = await fetchGames();
  const featuregame = games?.data?.data?.filter((game:GameData) => game.type === 'promoted');
  const normalGames = games?.data?.data
  const categorizedGames = {
    popular: games?.data?.data
      ?.filter((game: GameData) => game.type === 'popular')
      ?.sort((a: GameData, b: GameData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      ?.slice(0, 6),
    hot: games?.data?.data
      ?.filter((game: GameData) => game.type === 'hot')
      ?.sort((a: GameData, b: GameData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      ?.slice(0, 6),
    latest: games?.data?.data
      ?.filter((game: GameData) => game.type === 'latest')
      ?.sort((a: GameData, b: GameData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      ?.slice(0, 6),
  };
  
  console.log(categorizedGames)

  return (
    <div className='flex w-[98%] z-[8] mx-auto items-center justify-between portrait:px-[2.6vh] landscape:px-[2vw] portrait:gap-x-[3.5vh] landscape:gap-x-[3.5vw]'>
      <FeatureGames featuregame={featuregame} />
      <div className='flex items-center justify-between  portrait:gap-x-[2.3vh] landscape:gap-x-[2.3vw]'>
        <HotGames hotgame={categorizedGames} />
        <NormalGames normalGames={normalGames} />
      </div>
    </div>
  )
}

export default Game

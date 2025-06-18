import React from 'react'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'
import FeatureGames from '../games/featureGames';
import HotGames from '../games/hotGames';
import { GameData } from '@/lib/type';
import Loader from '../ui/Loader';

const Game = async (category: { category: string }) => {
  const fetchCategory:any = category?.category === 'all' ? undefined : category;
  const games = await fetchGames(fetchCategory);
  const featuregame = games?.data?.data?.filter((game: GameData) => game.type === 'promoted');
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

  return (
      games?.data?.data?.length>0?<div className='flex w-[98%] z-[8] mx-auto items-center justify-between portrait:px-[2.6vh] landscape:px-[2vw] portrait:gap-x-[3.5vh] landscape:gap-x-[3.5vw]'>
        {(category?.category === 'all') && <FeatureGames featuregame={featuregame} />}
        <div className='flex items-center justify-between portrait:gap-x-[2.3vh] landscape:gap-x-[2.3vw]'>
          {(category?.category === 'all') && <HotGames hotgame={categorizedGames} />}
        {category?.category&&<NormalGames normalGames={normalGames} isCategory={fetchCategory}/>}
        </div>
      </div >:<Loader/>
  )
}

export default Game

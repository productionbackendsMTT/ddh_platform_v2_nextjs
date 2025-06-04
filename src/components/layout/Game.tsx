import React from 'react'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'

const Game = async () => {
  const games = await fetchGames();
  return (
    <div className='flex w-[98%] z-[8] mx-auto items-center justify-between portrait:px-[2.6vh] landscape:px-[2vw]'>
        <NormalGames normalGames={games?.data?.data} />
    </div>
  )
}

export default Game

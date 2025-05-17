import React from 'react'
import FeatureGames from '../games/featureGames'
import HotGames from '../games/hotGames'
import NormalGames from '../games/normalGames'

const Game = () => {
  return (
    <div className='flex w-[95%] mx-auto items-center justify-around portrait:py-[1vh] landscape:py-[1vw]'>
      <FeatureGames />
      <HotGames />
      <NormalGames/>
    </div>
  )
}

export default Game

import React from 'react'
import FeatureGames from '../games/featureGames'
import HotGames from '../games/hotGames'
import NormalGames from '../games/normalGames'
import { fetchGames } from '@/lib/action'

const Game = async () => {
  const games = await fetchGames();
  const normalgame = [
    {
      id:1,
      image: '/assets/images/normal1.png',
      slug: 'viking',
    },
    {
      id:2,
      image: '/assets/images/normal2.png',
      slug: 'viking',
    },
    {
      id:3,
      image: '/assets/images/normal2.png',
      slug: 'viking',
    },
    {
      id:4,
      image: '/assets/images/normal2.png',
      slug: 'viking',
    },
    {
      id:5,
      image: '/assets/images/normal2.png',
      slug: 'viking',
    }
  ]

  const featuregame = [
    {
      id:1,
      image: '/assets/images/viking.png',
      slug: 'viking',
    },
    {
      id:2,
      image: '/assets/images/viking.png',
      slug: 'viking',
    },
    {
      id:3,
      image: '/assets/images/viking.png',
      slug: 'viking',
    },
    {
      id:4,
      image: '/assets/images/viking.png',
      slug: 'viking',
    }
  ]

  const hotgame = [
    {
      id:1,
      image: '/assets/images/crazy777.png',
      slug: 'viking',
    },
    {
      id:2,
      image: '/assets/images/china_town.png',
      slug: 'viking',
    },
    {
      id:3,
      image: '/assets/images/fisherman.png',
      slug: 'viking',
    },
    {
      id:4,
      image: '/assets/images/sizzling_moon.png',
      slug: 'viking',
    },
    {
      id:5,
      image: '/assets/images/blood_eternal.png',
      slug: 'viking',
    },
    {
      id:5,
      image: '/assets/images/golden_slots.png',
      slug: 'viking',
    }
  ]
  return (
    <div className='flex w-[98%] z-[8] mx-auto items-center justify-between portrait:px-[2.6vh] landscape:px-[2vw]'>
      <FeatureGames featuregame={featuregame}/>
      <div className='flex items-center justify-between  portrait:gap-x-[1.9vh] landscape:gap-x-[1.6vw]'>
        <HotGames hotgame={hotgame}/>
        <NormalGames normalGames={normalgame} />
      </div>
    </div>
  )
}

export default Game

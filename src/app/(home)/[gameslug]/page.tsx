import GameFrame from '@/components/games/GameFrame'
import { getGameUrl } from '@/lib/action';
import React from 'react'

const page = async({ params }: any) => {
  const { gameslug } = await params
  const gameurl = await getGameUrl(gameslug);

  return (<GameFrame gameurl={gameurl?.data} />)
}

export default page

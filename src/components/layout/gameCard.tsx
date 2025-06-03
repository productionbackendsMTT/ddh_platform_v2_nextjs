import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GameCard = ({ StylesClass, ImageClass, games,frame }: any) => {
  return (
    <Link
      href={`/${games?.slug}`}
      key={games?.id}
      className={`relative block cursor-pointer ${StylesClass}`}
    >
      <Image
        src={frame}
        alt='border'
        fill
        priority
        style={{ objectFit: 'cover', zIndex: 10 }}
      />

      <Image
        src={games?.thumbnail}
        alt='game'
        fill
        priority
        className={ImageClass}
        style={{ objectFit: 'cover', zIndex: 5 }}
      />
    </Link>
  )
}

export default GameCard

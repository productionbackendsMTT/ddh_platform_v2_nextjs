import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GameCard = ({ StylesClass, ImageClass, isFrame, games }: any) => {
  return (
    <Link
      href={`/${games?.slug}`}
      key={games?._id}
      className={`relative block cursor-pointer ${StylesClass} ${isFrame ? 'box' : ''}`}
      // container should have dynamic size (width/height) via StylesClass or parent styles
    >
      {/* Border image filling entire container */}
      <Image
        src={'/assets/images/boder.webp'}
        alt='border'
        fill
        priority
        style={{ objectFit: 'cover', zIndex: 10 }}
      />

      {/* Game image fit fully inside container */}
      <Image
        src={'/assets/images/gameimg.png'}
        alt='game'
        fill
        priority
        className={ImageClass}
        style={{ objectFit: 'contain', zIndex: 5 }}
      />
    </Link>
  )
}

export default GameCard

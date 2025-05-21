import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GameCard = ({ StylesClass, ImageClass, Cardkey, isFrame, games }: any) => {
    return (
        games&&(<Link href={`/${games?.slug}`} key={games?._id} className={`relative  ${isFrame && 'box'} block  cursor-pointer ${StylesClass} `}>
            <Image
                src={games?.thumbnail}
                alt='viking'
                height={2000}
                width={2000}
                quality={100}
                priority
                className={`w-full  h-full ${ImageClass}`}
            />
        </Link>
        )
    )
}

export default GameCard

import Image from 'next/image'
import React from 'react'

const GameCard = ({ StylesClass,ImageClass,Cardkey,isFrame }: any) => {
    return (
        <div key={Cardkey} className={`relative  ${isFrame && 'box'} transition-all cursor-pointer ${StylesClass} `}>
            
            <Image
                src={'/assets/images/viking.png'}
                alt='viking'
                fill
                quality={100}
                priority
                className={`w-full  h-full ${ImageClass}`}
            />
        </div>
    )
}

export default GameCard

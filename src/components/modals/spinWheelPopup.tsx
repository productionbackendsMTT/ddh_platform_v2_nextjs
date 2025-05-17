'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const SpinWheelPopup = ({ closeModal }: any) => {
    const segments = ['0.5$', '1$', '0.25$', '0.75$', '0.9$', '4$', '2$']
    const segmentAngle = 360 / segments.length
    const [isPortrait, setIsPortrait] = useState(true)


    const [angle, setAngle] = useState(0)
    const [spinning, setSpinning] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    const requestRef = useRef<number | null>(null)
    const startTimeRef = useRef<number | null>(null)
    const duration = 6000 // spin duration in ms
    const startAngleRef = useRef(0)
    const targetAngleRef = useRef(0)

    // Ease out cubic function for deceleration
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (time: number) => {
        if (!startTimeRef.current) startTimeRef.current = time
        const elapsed = time - startTimeRef.current
        if (elapsed > duration) {
            setAngle(targetAngleRef.current % 360)
            setSpinning(false)
            setResult(segments[(segments.length - Math.floor((targetAngleRef.current % 360) / segmentAngle)) % segments.length])
            startTimeRef.current = null
            requestRef.current = null
            return
        }

        const progress = elapsed / duration
        const easedProgress = easeOutCubic(progress)
        const currentAngle =
            startAngleRef.current + easedProgress * (targetAngleRef.current - startAngleRef.current)

        setAngle(currentAngle % 360)
        requestRef.current = requestAnimationFrame(animate)
    }

    const spin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        if (spinning) return

        setSpinning(true)
        setResult(null)

        const randomIndex = Math.floor(Math.random() * segments.length)
        const extraSpins = 5 * 360 // 5 full spins
        // Target angle to stop so that the selected segment is centered on top (0deg)
        const targetAngle = extraSpins + (360 - randomIndex * segmentAngle - segmentAngle / 2)

        startAngleRef.current = angle % 360
        targetAngleRef.current = targetAngle

        if (requestRef.current) cancelAnimationFrame(requestRef.current)
        requestRef.current = requestAnimationFrame(animate)
    }


    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <div className="flex flex-col items-center relative">
            <div className="portrait:w-[22vh] portrait:h-[22vh] landscape:w-[22vw] landscape:h-[22vw]">
                {/* Wheel */}
                <div
                    className="w-full h-full rounded-full border-4 border-red-800 cursor-pointer relative"
                    style={{
                        transform: `rotate(${angle}deg)`,
                        transition: 'none',
                        backgroundImage: `conic-gradient(from 0deg, #971FAC, #CB2D5F, #971FAC)`,
                    }}
                >
                    {/* Segment Labels */}
                    {segments.map((seg, i) => {
                        const rotation = i * segmentAngle

                        // Detect portrait or landscape
                        const isPortrait = typeof window !== 'undefined' && window.innerHeight > window.innerWidth
                        const xUnit = isPortrait ? 'vh' : 'vw'
                        const yUnit = isPortrait ? 'vh' : 'vw'

                        const translateX = isPortrait ? '-2.5vh' : '-2.5vw'
                        const translateY = isPortrait ? '-5vh' : '-5vw'

                        return (
                            <div
                                key={i}
                                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white portrait:text-[.9vh] landscape:text-[.9vw] font-bold"
                                style={{
                                    transform: `
                    rotate(${rotation}deg)
                    translateX(${translateX})
                    translateY(${translateY})
                    rotate(${-rotation}deg)
                `,
                                    transformOrigin: 'center',
                                }}
                            >
                                {seg}
                            </div>
                        )
                    })}


                    {/* White Separator Overlay */}
                    <Image
                        src="/assets/images/spin_sep.png"
                        alt="spin separator"
                        quality={100}
                        width={2000}
                        priority
                        height={2000}
                        className='object-cover  scale-x-[1.12] scale-y-[1.12]'

                    />


                </div>

            </div>

            <button onClick={(e) => spin(e)}>
                <Image
                    src="/assets/images/spin_frame.png"
                    alt="spin separator"
                    quality={100}
                    priority
                    width={2000}
                    height={2000}
                    className='absolute portrait:top-0 cursor-pointer landscape:top-0 bottom-0 right-0 object-cover scale-x-[1.16] scale-y-[1.16]'

                />
            </button>


            {result && !spinning && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 rounded-sm">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <h2 className="text-2xl font-bold text-green-600">🎉 Congratulations!</h2>
                        <p className="text-lg mt-2 text-gray-800">You won: <span className="font-bold">{result}</span></p>
                        <button
                            onClick={(e) => {e.stopPropagation(); setResult(""), setSpinning(false) }}
                            className="mt-4 px-4 py-2 bg-pink-500 cursor-pointer text-white rounded-md hover:bg-pink-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default SpinWheelPopup

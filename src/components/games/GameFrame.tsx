'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SSEEventType, useSSE } from '@/lib/context/SSE';

const GameFrame = ({ gameurl }: { gameurl: string }) => {
  const [progress, setProgress] = useState(0);
  const { lastEvent } = useSSE();
  const [gameConnected, setGameConnected] = useState(false);

  useEffect(() => {
    const urlObj = new URL(gameurl);
    const gameId = urlObj.searchParams.get("gameId");

    if (
      lastEvent?.type === SSEEventType.GAME_STARTED &&
      (!gameId || lastEvent.data.gameId === gameId)
    ) {
      setGameConnected(true);
    }
  }, [lastEvent, gameurl]);

  useEffect(() => {
    if (gameConnected) {
      setProgress(100);
      return;
    }

    const targetProgress = Math.round(Math.random() * (90 - 75) + 75); // Random target between 75 and 90
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(interval); // Stop updating once target is reached
          return prev;
        }
        if (prev < 70) return prev + 3;
        if (prev < 85) return prev + 2;
        if (prev < 90) return prev + 1;
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [gameConnected]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <iframe
        src={gameurl}
        width="100%"
        height="100%"
        className="rounded-lg transition-opacity duration-300"
        id="gameIframe"
      />
      {/* Loader overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-[10] transition-opacity duration-500 pointer-events-none ${
          gameConnected ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src="/assets/images/loader.webp"
          alt="loader_bg"
          width={3000}
          height={3000}
          quality={100}
          className="w-full h-full object-cover"
        />

        {/* Progress Bar Container */}
        <div className="absolute top-[15%] left-[25%] w-[50%] h-full z-[99] flex items-center justify-center">
          <div className="w-[80%] portrait:h-[1.5vh] landscape:h-[1.5vw] bg-[#0463AF] border-[.3vw] border-[#FD7AFF] rounded-full overflow-hidden relative">
            {/* Fill bar */}
            <div
              className="h-full bg-gradient-to-b from-[#7F5CF8] to-[#B74FEE] shadow-2xl transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Moving percentage text */}
            <div
              className={`absolute top-1/2 ${progress >90 ? '-translate-x-[1.6vw]' : 'pl-[1.9vw]'} -translate-y-1/2 text-white portrait:text-[1.2vh] landscape:text-[1vw] font-bold transition-all duration-200`}
              style={{
                left: `calc(${progress}% - 1.5vw)`,
              }}
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFrame;
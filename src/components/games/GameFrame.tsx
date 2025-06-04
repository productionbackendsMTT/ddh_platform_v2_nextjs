"use client";
import { SSEEventType, useSSE } from "@/lib/context/SSE";
import React, { useEffect, useState } from "react";

interface GameFrameProps {
  gameurl: string;
}
//
const GameFrame: React.FC<GameFrameProps> = ({ gameurl }) => {
  const { lastEvent } = useSSE();
  const [gameConnected, setGameConnected] = useState(false);

  useEffect(() => {
    // Optional: extract gameId from gameurl if needed
    console.log(lastEvent?.type ,SSEEventType.GAME_STARTED,"lastEvent");

    const urlObj = new URL(gameurl);
    const gameId = urlObj.searchParams.get("gameId");

    if (
      lastEvent?.type === SSEEventType.GAME_STARTED &&
      (!gameId || lastEvent.data.gameId === gameId)
    ) {
      setGameConnected(true);
    }
  }, [lastEvent, gameurl]);

  return (
    <div className="w-full h-full relative">
      <iframe
        src={gameurl}
        width="100%"
        height="100%"
        className="rounded-lg transition-opacity duration-300"
        id="gameIframe"
      />

      {/* Loader iframe overlay with higher z-index */}
      <iframe
        src={'https://loader.pandapower777.com/'}
        width="100%"
        height="100%"
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 z-[20] ${gameConnected ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        id="gameLoader"
      />
    </div>
  );
};

export default GameFrame;
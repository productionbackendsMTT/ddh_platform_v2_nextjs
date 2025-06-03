"use client"

import React, { createContext, useContext, useEffect, useState, useCallback, useRef, ReactNode } from 'react';
import { config } from '../config';

export enum SSEEventType {
  USER_CONNECTED = 'user-connected',
  USER_DISCONNECTED = 'user-disconnected',
  GAME_STARTED = 'game-started',
  GAME_ENDED = 'game-ended',
}

export interface SSEEventData {
  userId: string;
  gameId?: string;
  socketId?: string;
  timestamp: string;
  [key: string]: any;
}

interface SSEContextValue {
  isConnected: boolean;
  lastEvent: { type: SSEEventType; data: SSEEventData } | null;
  connectedUsers: SSEEventData[];
  activeGames: { [gameId: string]: SSEEventData[] };
  reconnect: () => void;
  disconnect: () => void;
}

const SSEContext = createContext<SSEContextValue | undefined>(undefined);

interface SSEProviderProps {
  children: ReactNode;
  authToken?: string;
  baseUrl?: string;
}

export const SSEProvider: React.FC<SSEProviderProps> = ({
  children,
  authToken,
  baseUrl = `${config.server}/api/sse/connect`
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastEvent, setLastEvent] = useState<{ type: SSEEventType; data: SSEEventData } | null>(null);
  const [connectedUsers, setConnectedUsers] = useState<SSEEventData[]>([]);
  const [activeGames, setActiveGames] = useState<{ [gameId: string]: SSEEventData[] }>({});

  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanUp = useCallback(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  }, []);

  const connect = useCallback(() => {
    if (!authToken) {
      console.log('SSE: No auth token provided, skipping connection');
      return;
    }

    cleanUp();

    try {
      // Add token as query parameter
      const urlWithToken = `${baseUrl}?token=${encodeURIComponent(authToken)}`;
      console.log('SSE: Connecting to', urlWithToken);

      const eventSource = new EventSource(urlWithToken, {
        withCredentials: true
      });

      eventSourceRef.current = eventSource;

      eventSource.onopen = () => {
        console.log('SSE: Connection opened');
        setIsConnected(true);
      };

      eventSource.addEventListener('connected', (event) => {
        try {
          const data = JSON.parse((event as MessageEvent).data);
          console.log('SSE: Connection established', data);
        } catch (error) {
          console.error('SSE: Error parsing connected event data', error);
        }
      });

      eventSource.addEventListener('init', (event) => {
        try {
          const data = JSON.parse((event as MessageEvent).data);
          console.log('SSE: Initialized with user data', data);
        } catch (error) {
          console.error('SSE: Error parsing init event data', error);
        }
      });

      eventSource.addEventListener(SSEEventType.USER_CONNECTED, (event) => {
        try {
          const data = JSON.parse((event as MessageEvent).data) as SSEEventData;
          console.log('SSE: User connected', data);

          setLastEvent({ type: SSEEventType.USER_CONNECTED, data });
          setConnectedUsers(prev => {
            const filtered = prev.filter(user => user.userId !== data.userId);
            return [...filtered, data];
          });

          if (data.gameId) {
            setActiveGames(prev => {
              const gameUsers = prev[data.gameId!] || [];
              const filtered = gameUsers.filter(user => user.userId !== data.userId);
              return {
                ...prev,
                [data.gameId!]: [...filtered, data]
              };
            });
          }
        } catch (error) {
          console.error('SSE: Error handling user-connected event', error);
        }
      });

      eventSource.addEventListener(SSEEventType.USER_DISCONNECTED, (event) => {
        try {
          const data = JSON.parse((event as MessageEvent).data) as SSEEventData;
          console.log('SSE: User disconnected', data);

          setLastEvent({ type: SSEEventType.USER_DISCONNECTED, data });
          setConnectedUsers(prev => prev.filter(user => user.userId !== data.userId));

          if (data.gameId) {
            setActiveGames(prev => {
              const gameUsers = prev[data.gameId!] || [];
              const filtered = gameUsers.filter(user => user.userId !== data.userId);
              if (filtered.length === 0) {
                const { [data.gameId!]: _, ...rest } = prev;
                return rest;
              }
              return {
                ...prev,
                [data.gameId!]: filtered
              };
            });
          }
        } catch (error) {
          console.error('SSE: Error handling user-disconnected event', error);
        }
      });

      eventSource.addEventListener(SSEEventType.GAME_STARTED, (event) => {
        try {
          const data = JSON.parse((event as MessageEvent).data) as SSEEventData;
          console.log('SSE: Game started', data);
          setLastEvent({ type: SSEEventType.GAME_STARTED, data });
        } catch (error) {
          console.error('SSE: Error handling game-started event', error);
        }
      });

      eventSource.addEventListener(SSEEventType.GAME_ENDED, (event) => {
        try {
          const data = JSON.parse((event as MessageEvent).data) as SSEEventData;
          console.log('SSE: Game ended', data);
          setLastEvent({ type: SSEEventType.GAME_ENDED, data });
        } catch (error) {
          console.error('SSE: Error handling game-ended event', error);
        }
      });

      eventSource.onerror = (error) => {
        console.error('SSE: Connection error', error);
        setIsConnected(false);
        eventSource.close();
        eventSourceRef.current = null;

        reconnectTimeoutRef.current = setTimeout(() => {
          console.log('SSE: Attempting to reconnect...');
          connect();
        }, 5000);
      };
    } catch (error) {
      console.error('SSE: Error creating connection', error);
      setIsConnected(false);
    }
  }, [authToken, baseUrl, cleanUp]);

  const reconnect = useCallback(() => {
    console.log('SSE: Manual reconnection requested');
    connect();
  }, [connect]);

  const disconnect = useCallback(() => {
    console.log('SSE: Manual disconnection requested');
    setIsConnected(false);
    cleanUp();
  }, [cleanUp]);

  useEffect(() => {
    connect();
    return cleanUp;
  }, [authToken, connect, cleanUp]);

  const contextValue: SSEContextValue = {
    isConnected,
    lastEvent,
    connectedUsers,
    activeGames,
    reconnect,
    disconnect
  };

  return (
    <SSEContext.Provider value={contextValue}>
      {children}
    </SSEContext.Provider>
  );
};

export const useSSE = () => {
  const context = useContext(SSEContext);
  if (context === undefined) {
    throw new Error('useSSE must be used within an SSEProvider');
  }
  return context;
};
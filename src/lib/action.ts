"use server"

import { config } from "./config";
import { getCookie } from "./cookies";

export async function fetchGames(query?: any) {
  console.log(query)
  try {
    const accessToken = await getCookie();
    const params = new URLSearchParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.set(key, value.toString());
        }
      });
    }

    const response = await fetch(`${config.server}/api/games?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch transaction');
    }

    return {
      data: {
        data: data.data,
        meta: data.meta
      },
      error: null
    };

  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Failed to fetch transaction'
    };
  }
}


export async function getGameUrl(slug: string) {
  if (slug) {
    try {
      const accessToken = await getCookie();

      const response = await fetch(`${config.server}/api/games/slug/${slug}/play`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      const json = await response?.json();

      if (!response.ok || !json.success) {
        throw new Error(json.message || 'Failed to fetch game URL');
      }

      return {
        data: json.data?.token || null,
        message: json.message,
        error: null
      };

    } catch (error) {
      return {
        data: null,
        message: 'Failed to fetch game URL',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

}
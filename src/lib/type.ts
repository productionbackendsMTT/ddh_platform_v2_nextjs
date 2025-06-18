export interface GameData {
  category: string;
  createdAt: string;
  description: string;
  name: string;
  order: number;
  payout: string;
  slug: string;
  status: string;
  tag: string;
  thumbnail: string;
  type: string;
  updatedAt: string;
  url: string;
  _id: string;
}

export interface NormalGamesProps {
  normalGames: GameData[];
}

export interface LoginPayload  { username: string; password: string };
export interface  LoginResponse { message?: string };
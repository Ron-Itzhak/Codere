export interface Game {
  odd: number;
  sortOrder: number;
  name: string;
}

export interface GameOdd {
  startDate: string;
  games: Game[];
  name: string;
}

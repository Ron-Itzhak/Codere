import { makeAutoObservable } from "mobx";
import { GameOdd } from "./types";
const url = `${process.env.NEXT_PUBLIC_API}`;

class GameOddsStore {
  gameOdds: GameOdd[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchGameOdds() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const sortedGameOdds = data[0].db.sort(sortGameOddsByTimeStamp);
      this.setGameOdds(sortedGameOdds);
    } catch (error) {
      console.error("Failed to fetch game odds:", error);
    }
  }

  setGameOdds(odds: GameOdd[]) {
    this.gameOdds = odds;
  }
  addGameOdd(newGameOdd: GameOdd) {
    this.gameOdds.push(newGameOdd);
  }
}

const gameOddsStore = new GameOddsStore();

export function sortGameOddsByTimeStamp(a: GameOdd, b: GameOdd) {
  const date1 = new Date(a.startDate);
  const date2 = new Date(b.startDate);

  return date1.getTime() - date2.getTime();
}

export default gameOddsStore;

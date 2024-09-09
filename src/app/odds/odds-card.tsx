import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GameOdd } from "../store/types";
interface OddsCardProps {
  gameOdd: GameOdd;
}
const OddsCard: React.FC<OddsCardProps> = (props: OddsCardProps) => {
  return (
    <Card className="bg-codere-grey w-[350px] transition-all duration-300">
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <p className="text-left">{props.gameOdd.games[0].name}</p>
          <p className="text-center flex-1">-</p>
          <p className="text-right">{props.gameOdd.games[2].name}</p>
        </div>
        <CardDescription className="text-center flex-1">
          {new Date(props.gameOdd.startDate).toLocaleString("he-IL")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row "></CardContent>
      <CardFooter>
        {props.gameOdd.games.map((game, index) => (
          <Card
            key={index}
            className="hover:bg-codere-green  w-[100px] h-[60px] bg-white flex-col justify-between items-center"
          >
            <p className="text-codere-txt-grey text-center">
              {game.sortOrder === 1 
  ? "X" 
  : game.sortOrder === 0 
    ? "1" 
    : game.sortOrder === 2 
      ? "2" 
      : index}
            </p>
            <p className=" text-codere-txt-blck text-center flex-1">
              {game.odd}
            </p>
          </Card>
        ))}
      </CardFooter>
    </Card>
  );
};

export default OddsCard;

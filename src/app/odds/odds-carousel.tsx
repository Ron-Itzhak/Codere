"use client";

import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import gameOddsStore from "../store/gameOddsStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SelectOddsSort from "./select-odds-sort";
import OddsCard from "./odds-card";
import { SortOrder } from "@/app/odds/types";
import { GameOdd } from "../store/types";

const OddsCarrousel = observer(() => {
  const store = gameOddsStore;
  const [sortType, setSortType] = useState<SortOrder>(SortOrder.Default);

  useEffect(() => {
    store.fetchGameOdds();
  }, [store]);

  if (store.gameOdds.length === 0) {
    return <div>Loading game odds...</div>;
  }
  function handleSortType(value: SortOrder): void {
    setSortType(value);
  }
  const getSortedGameOdds = () => {
    const clonedGameOdds = JSON.parse(
      JSON.stringify(store.gameOdds)
    ) as GameOdd[];
    if (sortType === SortOrder.Asc) {
      return clonedGameOdds.sort((a, b) => {
        const nameA = a.name || a.games[0].name;
        const nameB = b.name || b.games[0].name;
        return nameA.localeCompare(nameB);
      });
    } else if (sortType === SortOrder.Desc) {
      return clonedGameOdds.sort((a, b) => {
        const nameA = a.name || a.games[0].name;
        const nameB = b.name || b.games[0].name;
        return nameB.localeCompare(nameA);
      });
    }
    return clonedGameOdds;
  };

  const sortedGameOdds = getSortedGameOdds();

  return (
    <div>
      <SelectOddsSort onChange={handleSortType}></SelectOddsSort>
      <Carousel>
        <CarouselContent className="-ml-3 ">
          {store.gameOdds.map((odd, index) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4" key={index}>
              <OddsCard gameOdd={odd}></OddsCard>
            </CarouselItem>
          ))}

          {sortType !== SortOrder.Default &&
            sortedGameOdds.map((odd, index) => (
              <CarouselItem
                className="pl-1 md:basis-1/2 lg:basis-1/4"
                key={index}
              >
                <OddsCard gameOdd={odd}></OddsCard>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
});

export default OddsCarrousel;

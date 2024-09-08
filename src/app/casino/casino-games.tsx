import React from "react";
import Image from "next/image";

import casino1 from "./../../lib/assets/PRPAviator_Square.jpg";
import casino2 from "./../../lib/assets/PTLiveQuantumRoulette_Square.jpg";
import casino3 from "./../../lib/assets/PTPharaohsDaughter_Square.jpg";
import casino4 from "./../../lib/assets/PTPremiumBlackjack_Square.jpg";

const CasinoGames = () => {
  return (
    <div className=" bg-codere-black flex flex-col rounded items-center justify-center pt-2">
      <p className="text-codere-green font-bold text-xl	">Casino Games</p>
      <div className=" flex items-center justify-center flex-wrap gap-4 pl-2 pt-2 pb-2 pr-2">
        <Image
          className="w-44 md:w-60 lg:w-80 rounded	lg:flex"
          src={casino1}
          alt="Picture of the author"
        />
        <Image
          className="w-44 md:w-60 lg:w-80 rounded	lg:flex"
          src={casino2}
          alt="Picture of the author"
        />
        <Image
          className=" w-44 md:w-60 lg:w-80 rounded lg:flex"
          src={casino3}
          alt="Picture of the author"
        />
        <Image
          className=" w-44 md:w-60 lg:w-80 rounded lg:flex"
          src={casino4}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default CasinoGames;

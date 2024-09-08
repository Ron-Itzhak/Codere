import React from "react";
import CasinoGames from "./casino-games";
import CasinoArticle from "./casino-article";

const CasinoLayout = () => {
  return (
    <div className=" max-w-1345 flex flex-col space-y-6">
      <CasinoArticle></CasinoArticle>
      <CasinoGames></CasinoGames>
    </div>
  );
};

export default CasinoLayout;

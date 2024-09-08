import React from "react";
import casino1 from "./../../lib/assets/651X381- EL MEJOR CASINO EN VIVO.jpg";
import Image from "next/image";

const CasinoArticle = () => {
  return (
    <div className=" bg-codere-black flex flex-col lg:flex-row rounded-lg items-center justify-between p-6 pl-2 ">
      <div className="lg:w-2/3 text-left">
        <p className="text-codere-green font-bold text-xl">
          CASA DE APUESTAS OFICIAL
        </p>
        <p className="mt-4 text-white">
          ¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace
          tiempo venimos disfrutando juntos de un mundo de entretenimientos y
          ahora te brindamos la posibilidad de que te diviertas de manera
          online.
        </p>
      </div>

      <div className="mt-6 lg:mt-0 lg:w-1/3 flex justify-center lg:justify-end">
        <Image className=" rounded-lg" src={casino1} alt="Casino Game Image" />
      </div>
    </div>
  );
};

export default CasinoArticle;

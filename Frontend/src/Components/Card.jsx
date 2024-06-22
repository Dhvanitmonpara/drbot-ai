import React from "react";
import ButtonComp from "./ButtonComp";

function Card({
    title,
    content
}) {
  return (
    <div className="bg-[#f2fcfa] hover:bg-[#eefffa] hover:scale-[102%] transition-all h-80 w-96 rounded-3xl flex flex-col border-2">
      <div className="flex justify-center items-center flex-col p-10">
        <h1 className="w-full cursor-pointer text-start font-semibold text-2xl mb-2">{title}</h1>
        <p className="cursor-pointer text-lg">{content}</p>
      </div>
      <div className="flex justify-center items-center">
        <ButtonComp className="text-white bg-black" size="lg">
          More
        </ButtonComp>
      </div>
    </div>
  );
}

export default Card;

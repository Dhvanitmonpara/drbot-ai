import React from "react";
import ButtonComp from "./ButtonComp";

function Card({ title, content }) {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
    </svg>
  );
  return (
    <div className="bg-[#f2fcfa] hover:bg-[#eefffa] hover:scale-[102%] transition-all rounded-3xl flex flex-col gap-3 items-center justify-center px-[10px] py-[10px] border-2 shadow-[0px_0px_1px_0px_black] px-[15px] py-[27px] max-w-[251.825px]">
      <h1 className=" cursor-pointer text-start font-semibold text-2xl text-center mb-2">
        {title}
      </h1>
      <p className="cursor-pointer text-[12px] text-center">{content}</p>
      <div className="flex justify-center items-center">
        <ButtonComp className="text-white bg-black" size="lg" svg={svg}>
          More
        </ButtonComp>
      </div>
    </div>
  );
}

export default Card;

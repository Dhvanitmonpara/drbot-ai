import { useState } from "react";
import { Card, SendButton } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="md:mt-10 pt-16 sm:w-9/ md:mb-12 md:pt-14 mt-0 h-52 w-11/12 md:w-7/12 flex justify-center items-center">
        <p className="text-4xl md:text-5xl pb-10 lg:text-6xl font-semibold w-full text-center">
          AI-powered{" "}
          <span className="text-[#40bb98] inline">OutsourcingGPT</span>{" "}
          Intelligent solution for your needs
        </p>
      </div>
      <div className="w-full flex pt-11 md:pt-0 justify-center items-center">
        <p className="pt-7 pb-2 w-8/12 md:w-4/6 text-center">
          Enter your task requirements and get matched with AI-powered solutions
        </p>
      </div>
      <form
        className="flex justify-center mb-8 gap-2 w-full"
        onSubmit={(e) => searchHandler(e)}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Type here"
          className="input md:w-full w-7/12 max-w-md bg-[#c9d3d4] outline-[#5e5d5d] border-[1.5px] border-[#5e5d5d] rounded-[14px] px-4 py-2 text-black "
        />
        <div className="md:inline-block hidden">
          <SendButton />
        </div>
        <div>
          <button
            className="inline-block md:hidden rounded-xl ease-in-out active:scale-[95%] transition-colors active:bg-[#32a685]
                   bg-[#40bb98] px-5 py-[13px]">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;

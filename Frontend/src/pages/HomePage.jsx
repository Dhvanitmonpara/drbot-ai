import { useState } from "react";
import { ButtonComp, Input, Card, SendButton } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="hero flex flex-col items-center flex-wrap bg-transparent ">
      <div className="hero-content w-full text-center">
        <div className="w-full">
          <h1 className="text-5xl font-bold">
            AI-powered <span className="text-[#00adab]"> OutsourcingGPT </span>{" "}
            <br /> Intelligent solution for your needs
          </h1>
          <p className="pt-7 pb-2">
            Enter your task requirements and get matched with AI-powered
            solutions
          </p>
          <form className="flex justify-center gap-2 ">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs bg-[#c9d3d4] outline-[#5e5d5d] border-[1.5px] border-[#5e5d5d] rounded-[14px] px-4 py-2 text-black "
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
          <div className="flex px-[17px] py-[35px] gap-[20px] flex-wrap items-center justify-center">
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maioreofficia est in."
            />
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

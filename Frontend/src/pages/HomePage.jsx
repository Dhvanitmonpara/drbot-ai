import { useState } from "react";
import { ButtonComp, Input, Card } from "../Components";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="md:mt-16 md:pt-14 pt-0 mt-0 h-52 w-11/12 lg:2/12 md:w-7/12 flex justify-center items-center">
        <p className="text-4xl md:text-5xl lg:6xl font-semibold w-full text-center">
          AI-powered{" "}
          <span className="text-[#40bb98] inline">OutsourcingGPT</span>{" "}
          Intelligent solution for your needs
        </p>
      </div>
      <div className="mt-10 md:mt-16 w-11/12 h-40 md:w-8/12 flex justify-center items-center flex-col">
        <p className="md:text-lg text-md md:w-full w-10/12 text-center">
          Enter your task requirements and get matched with AI-powered solutions
        </p>
        <div className="w-10/12 mt-2 flex justify-center rounded-full overflow-hidden">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search here"
            className="text-md rounded-none border-none pl-10"
          />
          <ButtonComp
            className="bg-[#40bb98] font-semibold w-10 md:w-32 h-14 text-white text-xl rounded-none"
            size="lg">
            Chat
          </ButtonComp>
        </div>
      </div>
      <div className="my-16 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1170px]:px-32 lg:px-16 xl:px-0 px-0 xl:grid-cols-3 gap-6 justify-items-center">
          <div className="w-full max-w-sm">
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
          </div>
          <div className="w-full max-w-sm">
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
          </div>
          <div className="w-full max-w-sm">
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
          </div>
          <div className="w-full max-w-sm">
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
          </div>
          <div className="w-full max-w-sm">
            <Card
              title="Hello ji"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
            />
          </div>
          <div className="w-full max-w-sm">
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

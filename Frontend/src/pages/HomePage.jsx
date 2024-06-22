import { useState } from "react";
import { ButtonComp, Input } from "../Components";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="h-40 w-7/12 flex justify-center items-center">
        <p className="text-6xl font-semibold w-full text-center">
          AI-powered{" "}
          <span className="text-[#40bb98] inline">OutsourcingGPT</span>{" "}
          Intelligent solution for your needs
        </p>
      </div>
      <div className="mt-10 w-8/12 flex justify-center items-center flex-col">
        <p className="text-lg">
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
            className="bg-[#40bb98] font-semibold w-32 h-14 text-white text-xl rounded-none"
            size="lg">
            Chat
          </ButtonComp>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

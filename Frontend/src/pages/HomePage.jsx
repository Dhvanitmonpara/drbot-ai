import { useState } from "react";
import { ButtonComp, Input, Card, SendButton } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [search, setSearch] = useState("");

  // return (
  //   <div className="w-screen flex justify-center items-center flex-col">
  //     <div className="md:mt-16 md:pt-14 pt-0  mt-0 h-52 w-11/12 md:w-7/12 flex justify-center items-center">
  //       <p className="text-4xl md:text-5xl lg:6xl font-semibold w-full text-center">
  //         AI-powered{" "}
  //         <span className="text-[#40bb98] inline">OutsourcingGPT</span>{" "}
  //         Intelligent solution for your needs
  //       </p>
  //     </div>
  //     <div className="mt-10 md:mt-16 w-11/12 h-40 md:w-8/12 flex justify-center items-center flex-col">
  //       <p className="md:text-lg text-md md:w-full w-10/12 text-center">
  //         Enter your task requirements and get matched with AI-powered solutions
  //       </p>
  //       <div className="w-10/12 mt-2 flex justify-center rounded-full overflow-hidden">
  //         <Input
  //           value={search}
  //           onChange={(e) => setSearch(e.target.value)}
  //           placeholder="search here"
  //           className="text-md rounded-none border-none pl-10"
  //         />
  //         <ButtonComp
  //           className="bg-[#40bb98] font-semibold w-10 md:w-32 h-14 text-white text-xl rounded-none"
  //           size="lg">
  //           Chat
  //         </ButtonComp>
  //       </div>
  //     </div>
  //     <div className="my-16 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  //       <div className="grid grid-cols-1 md:grid-cols-2 min-[1170px]:px-32 lg:px-16 xl:px-0 px-0 xl:grid-cols-3 gap-6 justify-items-center">
  //         <div className="w-full max-w-sm">
  //           <Card
  //             title="Hello ji"
  //             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
  //           />
  //         </div>
  //         <div className="w-full max-w-sm">
  //           <Card
  //             title="Hello ji"
  //             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
  //           />
  //         </div>
  //         <div className="w-full max-w-sm">
  //           <Card
  //             title="Hello ji"
  //             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
  //           />
  //         </div>
  //         <div className="w-full max-w-sm">
  //           <Card
  //             title="Hello ji"
  //             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
  //           />
  //         </div>
  //         <div className="w-full max-w-sm">
  //           <Card
  //             title="Hello ji"
  //             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
  //           />
  //         </div>
  //         <div className="w-full max-w-sm">
  //           <Card
  //             title="Hello ji"
  //             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam numquam commodi, error maiores officia est in."
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

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

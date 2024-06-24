import React, { useState } from "react";
import {
  ChatBubble,
  Input,
  SendButton,
  ChatHistoryMenu,
  ArrowDownIcon,
} from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChatPage() {
  const [isRotated, setIsRotated] = useState(false);
  const handleToggle = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className="h-[85vh] flex justify-center space-x-0 md:space-x-4 items-center w-screen">
      <div className="h-[75vh] md:inline hidden mb-[5vh] w-3/12 bg-[#f2fcfa] border-2 rounded-3xl">
        <ChatHistoryMenu />
      </div>
      <div className="md:h-[75vh] h-[85vh] mb-[5vh] md:w-7/12 w-full md:bg-[rgb(242,252,250)] relative border-none md:border-2 rounded-3xl">
        <div className="md:hidden flex justify-center items-center w-full">
          <button
            className="flex z-40 space-x-3 font-semibold items-center justify-center"
            onClick={handleToggle}>
            History
            <ArrowDownIcon isRotated={isRotated} />
          </button>
        </div>
        <div className={`w-screen fixed z-10 overflow-hidden ease-in-out transition-all bg-[#EBF7F7] ${isRotated ? "h-[85vh]" : "h-0"}`}>
          <ChatHistoryMenu className="z-10"/>
        </div>
        <div className="md:p-4 p-2 w-full h-full md:h-[70vh] overflow-y-scroll">
          {/* chat bubble */}
          <ChatBubble>Hey, what's up!</ChatBubble>
          <ChatBubble isChatStart={true}>Fine wbu?</ChatBubble>
        </div>
        <div className="flex space-x-2 md:space-x-3 absolute justify-center bottom-0 md:bottom-3 items-center w-full">
          <div className="flex w-9/12 lg:w-5/6">
            <Input
              className="h-[50px] rounded-xl focus:border-1 pl-4 w-full"
              placeholder="Hello..."
              size="sm"
              type="search"
            />
          </div>
          <div className="md:inline-block hidden">
            <SendButton />
          </div>
          <div>
            <button className="inline-block md:hidden rounded-xl ease-in-out active:scale-[95%] transition-colors active:bg-[#32a685] bg-[#40bb98] px-5 py-[13px]">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

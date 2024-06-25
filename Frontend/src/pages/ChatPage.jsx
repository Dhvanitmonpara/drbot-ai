import React, { useId, useState } from "react";
import {
  ChatBubble,
  Input,
  SendButton,
  ChatHistoryMenu,
  ArrowDownIcon,
} from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function ChatPage() {
  const [isRotated, setIsRotated] = useState(false);
  const handleToggle = () => {
    setIsRotated(!isRotated);
  };

  const chats = [
    {
      id: useId(),
      title: "How can help you today?",
    },
    {
      id: useId(),
      title: "Do you need any help?",
    },
    {
      id: useId(),
      title: "You should take medicine on time",
    },
    {
      id: useId(),
      title: "Take paracetamol 3 times a day",
    },
  ];

  const chatId = useParams();

  return (
    <div className="h-[85vh] flex justify-center space-x-0 md:space-x-4 items-center w-screen">
      <div className="h-[75vh] lg:inline hidden mb-[5vh] lg:5/12 xl:w-3/12 bg-[#f2fcfa] border-2 rounded-3xl">
        <ChatHistoryMenu chats={chats} />
      </div>
      <div className="lg:h-[75vh] h-[85vh] mb-[5vh] lg:w-7/12 w-full lg:bg-[#f2fcfa] relative border-0 lg:border-2 rounded-3xl">
        <div className="lg:hidden flex justify-center items-center w-full">
          <button
            className="flex z-40 space-x-3 font-semibold items-center justify-center"
            onClick={handleToggle}>
            History
            <ArrowDownIcon isRotated={isRotated} />
          </button>
        </div>
        <div
          className={`w-screen fixed z-10 overflow-hidden ease-in-out transition-all bg-[#EBF7F7] ${
            isRotated ? "h-[85vh]" : "h-0"
          }`}>
          <ChatHistoryMenu chats={chats} className="z-10" />
        </div>
        <div className="md:p-4 p-2 w-full h-full md:h-[70vh] overflow-y-scroll">
          {/* chat bubble */}
          <ChatBubble>Hey, what's up!</ChatBubble>
          <ChatBubble isChatStart={true}>Fine wbu?</ChatBubble>
        </div>
        <div className="flex space-x-2 md:space-x-3 absolute justify-center bottom-0 md:bottom-3 items-center w-full">
          <div className="flex justify-center items-center w-9/12 2xl:w-5/6">
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
            <button className="inline-block md:hidden rounded-xl ease-in-out active:scale-[95%] transition-colors active:bg-[#32a685]
                 bg-[#40bb98] px-5 py-[13px]">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

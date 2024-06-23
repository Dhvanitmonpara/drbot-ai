import React from "react";
import { ChatBubble, Input, SendButton, ChatHistoryMenu } from "../Components";

function ChatPage() {
  return (
    <div className="h-[85vh] flex justify-center space-x-4 items-center w-screen">
      <div className="h-[75vh] mb-[5vh] w-3/12 bg-[#f2fcfa] border-2 rounded-3xl">
        <ChatHistoryMenu />
      </div>
      <div className="h-[75vh] mb-[5vh] w-7/12 bg-[rgb(242,252,250)] relative border-2 rounded-3xl">
        <div className="p-4 w-full h-[70vh] overflow-y-scroll">
          {/* chat bubble */}
          <ChatBubble>Hey, what's up!</ChatBubble>
          <ChatBubble isChatStart={true}>Fine wbu?</ChatBubble>
        </div>
        <div className="flex space-x-3 absolute justify-center bottom-3 items-center w-full">
          <div className="flex w-5/6">
            <Input
              className="h-[50px] rounded-xl focus:border-1 pl-4 w-full"
              placeholder="Hello..."
              size="sm"
              type="search"
            />
          </div>
          <div>
            <SendButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

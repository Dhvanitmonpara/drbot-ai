import React, { useEffect, useId, useState } from "react";
import {
  ChatBubble,
  Input,
  SendButton,
  ChatHistoryMenu,
  ArrowDownIcon,
  Logo,
} from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style/ChatPage.css";

function ChatPage() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const [allChats, setAllChats] = useState([]);
  const [userData, setUserData] = useState();

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const rawUserData = useSelector((state) => state.auth.userData);
  const rawAllChats = useSelector((state) => state.chat.chats.documents);

  useEffect(() => {
    if (isUserLoggedIn) {
      if (rawUserData) {
        setUserData(rawUserData.userData);
        if (!userData) setUserData(rawUserData);
      }
      if (rawAllChats) setAllChats(rawAllChats);
    }
  }, [isUserLoggedIn, rawUserData, rawAllChats]);

  const { chatId } = useParams();

  const msgHandler = (e) => {
    e.preventDefault();
    if (input) {
      const newChat = {
        isAuthor: false,
        text: input,
      };
      setChat((prevChat) => [...prevChat, newChat]);
      setInput("");
    } else {
    }
  };

  console.log("chatId: " + chatId);

  const handleToggle = () => {
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    if (allChats && userData && userData.$id) {
      console.log(allChats);
      const filteredChats = allChats.filter((chat) => chat.$id == userData.$id);
      setChat(filteredChats);
    }
  }, [allChats, userData && userData.$id]);

  return (
    <>
      {userData && isUserLoggedIn ? (
        <div className="h-[85vh] flex justify-center space-x-0 md:space-x-4 items-center w-screen">
          <div className="h-[75vh] lg:inline hidden mb-[5vh] lg:5/12 xl:w-3/12 bg-[#f2fcfa] border-2 rounded-3xl">
            <ChatHistoryMenu chats={allChats} />
          </div>
          <div className="lg:h-[75vh] pb-[70px] h-[85vh] mb-[5vh] lg:w-7/12 w-full lg:bg-[#f2fcfa] relative border-0 lg:border-2 rounded-3xl">
            <div className="history-button lg:hidden flex justify-center items-center w-full">
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
              <ChatHistoryMenu chats={allChats} className="z-10" />
            </div>
            <div className="main-content px-2 w-full py-0 flex justify-center items-center h-[97%] overflow-y-scroll md:h-[70vh] lg:h-[64vh]">
              {chatId ? (
                <div className="chat-container md:h-full h-[85%] overflow-y-scroll">
                  {chat &&
                    chat.map((individualChat) => (
                      <ChatBubble
                        className="individual-chat"
                        key={() => useId()}
                        isChatStart={individualChat.isAuthor}>
                        {individualChat.text}
                      </ChatBubble>
                    ))}
                  <div className="h-2/6"></div>
                </div>
              ) : (
                <Logo />
              )}
            </div>
            <form
              onSubmit={(e) => msgHandler(e)}
              className="flex space-x-2 md:space-x-3 absolute justify-center bottom-0 md:bottom-3 items-center w-full">
              <div className="flex justify-center items-center w-9/12 2xl:w-5/6">
                <Input
                  className="h-[50px] rounded-xl focus:border-1 pl-4 w-full"
                  placeholder={
                    chatId ? "Hello..." : "Start a new conversation..."
                  }
                  size="sm"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="search"
                  autoComplete="off"
                />
              </div>
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
        </div>
      ) : (
        <div className="h-[85vh] flex justify-center items-center">
          <Link
            to="/account/login"
            className="hover:underline text-4xl font-semibold pb-16">
            Login to continue
          </Link>
        </div>
      )}
    </>
  );
}

export default ChatPage;

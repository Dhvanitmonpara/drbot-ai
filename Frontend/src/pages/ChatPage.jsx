import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style/ChatPage.css";

function ChatPage() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const [allChats, setAllChats] = useState([]);
  const [userData, setUserData] = useState(null);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const rawUserData = useSelector((state) => state.auth.userData);
  const rawAllChats = useSelector((state) => state.chat.chats.documents);
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [isChatActive, setIsChatActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isUserLoggedIn) {
      if (rawUserData) {
        setUserData(rawUserData.userData || rawUserData);
      }
      if (rawAllChats) setAllChats(rawAllChats);
    }
  }, [isUserLoggedIn, rawUserData, rawAllChats]);

  useEffect(() => {
    if (location.pathname == "/chats") {
      setIsChatActive(false);
    } else {
      setIsChatActive(true);
    }
  }, [location]);

  const msgHandler = (e) => {
    e.preventDefault();
    if (chatId) {
      if (input.trim()) {
        const newChatMsg = {
          id: Date.now().toString(),
          isAuthor: false,
          text: input.trim(),
        };

        setChat((prevChat) => [...prevChat, newChatMsg]);

        if (allChats.some((chatObj) => chatObj.id === chatId)) {
          setAllChats((prevChats) =>
            prevChats.map((chatObj) =>
              chatObj.id === chatId
                ? { ...chatObj, content: [...chatObj.content, newChatMsg] }
                : chatObj
            )
          );
        } else {
          const newChatObj = {
            id: chatId,
            title: "New Chat", // FIXME: get this from AI
            content: [newChatMsg],
            userId: userData?.$id,
          };
          setAllChats((prevChats) => [...prevChats, newChatObj]);
        }

        setInput("");
      }
    } else {
    }
  };

  const handleToggle = () => {
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    if (allChats.length > 0 && chatId) {
      const currentChat = allChats.find((chat) => chat.id === chatId);
      if (currentChat) {
        setChat(currentChat.content);
      } else {
        setChat([]);
      }
    }
  }, [allChats, chatId]);

  console.log("allchats: ", allChats)

  return (
    <>
      {userData && isUserLoggedIn ? (
        <div className="h-[85vh] flex justify-center space-x-0 md:space-x-4 items-center w-screen">
          <div className="h-[75vh] lg:inline hidden mb-[5vh] lg:5/12 xl:w-3/12 dark:bg-[#0c2929] bg-[#f2fcfa] dark:border-[#0b2626] border-2 rounded-3xl">
            <ChatHistoryMenu allChats={allChats} />
          </div>
          <div className="lg:h-[75vh] pb-[70px] h-[85vh] mb-[5vh] lg:w-7/12 w-full dark:border-[#0b2626] dark:bg-[#0c2929] lg:bg-[#f2fcfa] relative border-0 lg:border-2 rounded-3xl">
            <div className="history-button lg:hidden flex justify-center dark:bg-[#091f1f] items-center w-full">
              <button
                className="flex z-40 space-x-3 font-semibold items-center justify-center"
                onClick={handleToggle}>
                History
                <ArrowDownIcon isRotated={isRotated} />
              </button>
            </div>
            <div
              className={`w-screen fixed z-10 overflow-hidden ease-in-out transition-all dark:bg-[#0c2929] bg-[#EBF7F7] ${
                isRotated ? "h-[85vh]" : "h-0"
              }`}>
              <ChatHistoryMenu chats={allChats} className="z-10" />
            </div>
            <div className="main-content px-2 w-full py-0 flex justify-center items-center h-[97%] overflow-y-scroll md:h-[70vh] lg:h-[64vh]">
              {isChatActive ? (
                <div className="chat-container w-full md:h-full h-[85%] overflow-y-scroll">
                  {chat.map((individualChat) => (
                    <ChatBubble
                      key={individualChat.id}
                      className="individual-chat"
                      isChatStart={individualChat.isAuthor}>
                      {individualChat.text}
                    </ChatBubble>
                  ))}
                  {chat.length == 0 ? (
                    <div className="flex justify-center items-center h-full">
                      <span className="md:text-2xl text-lg text-gray-400 cursor-pointer font-semibold">
                        No chats found, ask something
                      </span>
                    </div>
                  ) : null}
                  <div className="h-2/6"></div>
                </div>
              ) : (
                <div className="flex justify-center items-center flex-col space-y-4">
                  <span
                    onClick={() => {
                      const newChatId = new Date().getTime().toString();
                      navigate(`/chats/${newChatId}`);
                    }}
                    className="hover:underline md:text-2xl text-lg hover:text-gray-200 text-gray-400 cursor-pointer font-semibold">
                    Select a chat or create new one
                  </span>
                </div>
              )}
            </div>
            <form
              onSubmit={(e) => msgHandler(e)}
              className="flex dark:bg-[#091f1f] md:dark:bg-[#0c2929] space-x-2 md:space-x-3 absolute justify-center bottom-0 md:bottom-3 items-center w-full">
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
                  className="inline-block md:hidden rounded-xl ease-in-out active:scale-[95%] transition-colors
                  px-5 py-[13px] bg-[#40bb98] active:bg-[#32a685]">
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

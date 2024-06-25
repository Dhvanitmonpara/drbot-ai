import { NavLink } from "react-router-dom";
import { Input } from "../Components";

export default function ChatHistoryMenu({ className, chats }) {
  return (
    <div
      className={`flex flex-col w-full p-4 justify-center items-center ${className}`}>
      <Input
        className="rounded-full px-6"
        placeholder="Search chats..."
        size="sm"
        type="search"
      />
      <div className="w-full my-6 overflow-y-scroll overflow-x-hidden flex flex-col px-3 space-y-3 justify-center items-start text-gray-950 h-auto">
        {chats && chats.map((chat) => (
          <NavLink to={`/chats/${chat.id}`} className={({isActive})=>(`font-semibold text-lg ${isActive ? "text-gray-950" : "text-gray-600"}`)} key={chat.id}>
            {chat.title}
          </NavLink>
        ))
        }
      </div>
    </div>
  );
}

import { Input } from "../Components";

export default function ChatHistoryMenu() {
  return (
    <div className="flex flex-col w-full p-4 justify-center items-center">
      <Input
        className="rounded-full px-6"
        placeholder="Search chats..."
        size="sm"
        type="search"
      />
      <div></div>
    </div>
  );
}

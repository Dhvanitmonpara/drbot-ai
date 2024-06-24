import { Input } from "../Components";

export default function ChatHistoryMenu({ className }) {
  return (
    <div
      className={`flex flex-col w-full p-4 justify-center items-center ${className}`}>
      <Input
        className="rounded-full px-6"
        placeholder="Search chats..."
        size="sm"
        type="search"
      />
    </div>
  );
}

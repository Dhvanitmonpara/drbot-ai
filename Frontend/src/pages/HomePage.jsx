import { useState } from "react";
import { Header, Input } from "../Components";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search here"
        className="text-md"
      />
    </>
  );
}

export default HomePage;

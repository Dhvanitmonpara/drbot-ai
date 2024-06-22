import { useState } from "react";
import "./App.css";
import { Input } from "./Components";

function App() {
    const [search, setSearch] = useState("");

    return (
        <>
            <h1>Hello world</h1>
            <Input
                label="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search here"
            />
        </>
    );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./Components";

function App() {
  return (
    <>
      <main className="bg-[#EBF7F7] min-h-[100vh]">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;

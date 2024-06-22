import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./Components";

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;

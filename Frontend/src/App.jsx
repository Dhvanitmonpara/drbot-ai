import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Components";
import { useEffect, useState } from "react";
import authService from "./appwrite/authConfig";
import dbService from "./appwrite/dbConfig";
import { Query } from "appwrite";
import { login, logout } from "./store/authSlice";
import { setChats } from "./store/chatSlice";
import {useDispatch} from "react-redux"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loginHandler = async (userData) => {
    await dispatch(login({ userData }));
    const query = await [Query.equal("userId", userData.$id)];
    const chats = await dbService.getChats(query);
    dispatch(setChats(chats));
  };

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          loginHandler(userData);
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (!loading) {
    return (
      <main className="bg-[#EBF7F7] min-h-[100vh]">
        <Header />
        <Outlet />
      </main>
    );
  }
}

export default App;

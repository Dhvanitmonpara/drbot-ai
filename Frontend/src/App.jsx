import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Components";
import { useEffect, useState } from "react";
import authService from "./appwrite/authConfig";
import dbService from "./appwrite/dbConfig";
import { Query } from "appwrite";
import { login, logout } from "./store/authSlice";
import { setChats } from "./store/chatSlice";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const dispatch = useDispatch();

  const loginHandler = async (userData) => {
    try {
      await dispatch(login({ userData }));
      const queries = [Query.equal("userId", userData.$id)];
      const chatsResponse = await dbService.getChats(queries);
      const chats = chatsResponse.documents || [];
      dispatch(setChats(chats));
    } catch (error) {
      setError(error)
    }
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

  if (loading) return <div>Loading...</div>;

  if (!loading) {
    if (error) {
      return <h1>Some error occurred: {error}</h1>;
    } else {
      return (
        <main className="bg-[#EBF7F7] dark:text-white dark:bg-[#091f1f] min-h-[100vh]">
          <Header />
          <Outlet />
        </main>
      );
    }
  }
}

export default App;

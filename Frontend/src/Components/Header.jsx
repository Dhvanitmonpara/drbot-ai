import React from "react";
import { Logo } from "../Components";
import { NavLink } from "react-router-dom";

function Header({ route }) {
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Chats",
      route: "/chats",
    },
    {
      name: "About us",
      route: "/aboutus",
    },
    {
      name: "Contact",
      route: "/contact",
    },
    {
      name: "Login",
      route: "/account/login"
    },
    {
      name: "Signup",
      route: "/account/signup"
    }
  ];
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {navItems &&
            navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `block mb-4 hover:text-black font-semibold text-xl ${
                    isActive ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                  }`
                }
                to={item.route}
                key={item.name}>
                {item.name}
              </NavLink>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

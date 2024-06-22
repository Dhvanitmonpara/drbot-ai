import React from "react";
import { Logo, ProfileIcon } from "..";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
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
  ];
  return (
    <header className='h-28 w-screen flex justify-between items-center px-24'>
      <Logo />
      <nav className="flex items-center h-full">
        <ul className="flex space-x-9">
          {navItems &&
            navItems.map((item) => (
              <NavLink
              className={({ isActive }) =>
                `bold mb-4 hover:text-black font-semibold text-xl relative ${
                  isActive ? "text-black active dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`
              }
                to={item.route}
                key={item.name}>
                {item.name}
              </NavLink>
            ))}
        </ul>
      </nav>
      <ProfileIcon/>
    </header>
  );
}

export default Header;

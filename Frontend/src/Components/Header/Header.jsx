import React, { useState, useRef, useEffect } from "react";
import { Logo, MenuButton, ProfileIcon } from "..";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", route: "/" },
    { name: "Chats", route: "/chats" },
    { name: "About us", route: "/aboutus" },
    { name: "Contact", route: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="h-28 w-screen flex justify-between items-center px-10 md:px-16 lg:px-24">
      <MenuButton className="md:hidden inline-block" onClick={toggleMenu} />
      <Logo />
      <nav
        ref={menuRef}
        className={`md:flex ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row absolute md:relative top-28 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}>
        <ul className="flex flex-col md:flex-row md:space-x-7 lg:space-x-9 p-4 md:p-0">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `bold mb-4 md:mb-0 hover:text-black font-semibold text-lg lg:text-xl relative ${
                  isActive
                    ? "text-black active dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`
              }
              to={item.route}
              key={item.name}
              onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <ProfileIcon />
    </header>
  );
}

export default Header;

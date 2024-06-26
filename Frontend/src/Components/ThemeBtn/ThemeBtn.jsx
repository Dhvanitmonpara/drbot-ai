import React from "react";
import "./ThemeBtn.css";

function ThemeBtn({ label, className = "" }) {
  const themeRoot = document.getElementById("root");
  const themeHandler = (e) => {
    themeRoot.classList.remove("light", "dark");
    if (e.target.checked) {
      themeRoot.setAttribute("data-theme", "dark");
      themeRoot.classList.add("dark");
    } else {
      themeRoot.setAttribute("data-theme", "light");
      themeRoot.classList.add("light");
    }
  };

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    themeRoot.setAttribute("data-theme", "dark");
    themeRoot.classList.add("dark");
  }

  return (
    <div>
      <label class="switch">
        <input
          type="checkbox"
          onChange={(e) => themeHandler(e)}
          id={label}
          className={className}
        />
        <span class="slider"></span>
      </label>
    </div>
  );
}

export default ThemeBtn;

import React from "react";
import "./MenuButton.css";

function MenuButton({ className = "", ...props }) {
  return (
    <div className={className}>
      <input id="burger-checkbox" type="checkbox" {...props}/>
      <label class="burger" for="burger-checkbox">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}

export default MenuButton;

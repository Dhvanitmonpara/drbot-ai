import React from "react";
import "./MenuButton.css";

function MenuButton({ className = "" }) {
  return (
    <div className={className}>
      <input
        hidden=""
        className="check-icon"
        id="check-icon"
        name="check-icon"
        type="checkbox"
      />
      <label className="bar bar--3"></label>
    </div>
  );
}

export default MenuButton;

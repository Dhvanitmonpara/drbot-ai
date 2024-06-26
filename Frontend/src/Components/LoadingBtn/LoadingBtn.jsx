import React from "react";
import "./LoadingBtn.css";

function LoadingBtn({ className = "" }) {
  return (
    <div className={className}>
      <div class="loader"></div>
    </div>
  );
}

export default LoadingBtn;

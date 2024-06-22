import React, { useId } from "react";

function Input({ label, type = "text", className = "", ...props }) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="leading-7 text-sm text-gray-400" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full bg-gray-400 bg-opacity-40 rounded-lg h-14 border text-black border-gray-800 focus:border-gray-950 focus:bg-gray-300 focus:ring-2 focus:ring-black outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
}

export default Input;

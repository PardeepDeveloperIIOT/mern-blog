import React from "react";

const ButtonAccount = ({ title }) => {
  return (
    <button className="bg-gradient-to-r from-purple-500 to-red-400 p-2 text-white rounded-xl sm:w-72 w-full">
      {title}
    </button>
  );
};

export default ButtonAccount;

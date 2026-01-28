import React from "react";
import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  const handleGoogleClick = () => {};
  return (
    <button
      onClick={handleGoogleClick}
      className="relative mt-4 border border-red-400 text-black hover:bg-gradient-to-r from-gray-200 to-red-600 p-2 hover:text-white rounded-xl sm:w-72 w-full"
    >
      <FcGoogle className="absolute top-1/3 left-10 text-lg" /> Continue with
      Google
    </button>
  );
};

export default OAuth;

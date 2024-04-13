import React from "react";
import { ReactComponent as Logo } from "../assets/Netflix_Logo.svg";
import { LuLanguages } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useStore } from "react-redux";

const Header = () => {
  const user = useStore((store) => store.user);
  return (
    <div className="w-full px-6 py-4 absolute z-20 flex justify-between items-center">
      <Logo className="h-16" />
      <div className="flex items-center gap-6">
        <div class="relative inline-block">
          <select class="appearance-none border border-white bg-transparent pl-8 pr-4 py-1 rounded-md text-white cursor-pointer">
            <option value="English" class="text-black bg-white">
              English
            </option>
            <option value="Hindi" class="text-black bg-white">
              हिन्दी
            </option>
          </select>
          <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <LuLanguages class="text-white" />
          </div>
        </div>
        <NavLink
          className="bg-red-600 px-3 py-1 rounded-lg text-white font-medium"
          to={"/login"}
        >
          Sign In
        </NavLink>
      </div>
      {user && <div>
        
      </div>}
    </div>
  );
};

export default Header;

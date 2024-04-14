import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/Netflix_Logo.svg";
import { LuLanguages } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as UserPic } from "../assets/user.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Return a cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div>
      {user ? (
        <div className="w-full absolute z-20 pr-3 py-3 flex justify-between bg-black/80 text-white">
          <div className="flex items-center">
            <Logo className="h-11" />
            <nav>
              <ul className="flex gap-4 font-medium">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/tv-shows"}>TV Shows</NavLink>
                <NavLink to={"/movies"}>Movies</NavLink>
                <NavLink to={"/news"}>News & Popular</NavLink>
                <NavLink to={"/my-list"}>My List</NavLink>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <UserPic />
            <button onClick={handleSignout}>(Sign Out)</button>
          </div>
        </div>
      ) : (
        <div className="w-full px-6 py-4 absolute z-20 flex justify-between items-center">
          <Logo className="h-14" />
          <div className="flex items-center gap-6">
            <div className="relative inline-block">
              <select className="appearance-none border border-white bg-transparent pl-8 pr-4 py-1 rounded-md text-white cursor-pointer">
                <option value="English">English</option>
                <option value="Hindi">हिन्दी</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <LuLanguages className="text-white" />
              </div>
            </div>
            <NavLink
              className="bg-red-600 px-3 py-1 rounded-lg text-white font-medium"
              to={"/login"}
            >
              Sign In
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

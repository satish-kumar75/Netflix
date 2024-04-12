import React from "react";
import Header from "./Header";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Header />
      <img
        className="absolute h-svh w-full object-cover"
        src={background}
        alt="background netflix"
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black via-[#1111116d] to-black"></div>
      <div className="relative z-20 flex items-center justify-center h-svh text-white">
        <div className="bg-black bg-opacity-70 p-10 w-1/4 rounded-lg">
          <p className=" text-4xl mb-4">Sign In</p>
          <input
            className="w-full bg-[#151313] border rounded-md px-3 py-3 outline-none"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            className="w-full bg-[#151313] border rounded-md px-3 py-3 outline-none my-5"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#ff1621] px-3 py-2 rounded-md text-2xl hover:bg-[#ec151f] transition-all w-full mt-6">
            Sign In
          </button>
          <div className=" flex justify-between mt-2">
            <span className="flex items-center gap-2">
              {" "}
              <input type="checkbox" />
              Remember me
            </span>
            <p>Need help?</p>
          </div>
          <div className="mt-9">
            <span>New to Netflix?</span>
            <Link to={"/login"} className="font-medium ml-2">
              Sign up now.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

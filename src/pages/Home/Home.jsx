import React from "react";
import background from "../../assets/background.jpg";
import "./Home.scss";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <img
        className="absolute h-svh w-full object-cover z-0"
        src={background}
        alt="background netflix"
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black via-[#1111116d] to-black"></div>
      <div className="M-content text-white text-center">
        <h1 className="text-5xl font-bold relative z-20">
          <span className="text-[#ff1621]"> Unlimited</span> movies, TV shows
          and more.
        </h1>
        <p className="text-2xl mt-4 mb-5 relative z-20">
          Watch anywhere. Cancel anytime.
        </p>
        <div>
          <p className="text-xl relative z-20">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div className="mt-4 flex items-center justify-center gap-5 relative z-20">
            <input
              type="text"
              placeholder="Email address"
              className="bg-[#151313] border rounded-md px-3 py-3 outline-none max-w-96 w-full"
            />
            <button className="bg-[#ff1621] px-3 py-2 flex items-center gap-3 rounded-md text-2xl hover:bg-[#ec151f] transition-all">
              Get Started <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

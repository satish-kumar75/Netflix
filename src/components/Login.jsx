import React, { useRef, useState } from "react";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName }));
          });
        })
        .catch((error) => {});
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {})
        .catch((error) => {});
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <img
        className="absolute h-svh w-full object-cover"
        src={background}
        alt="background netflix"
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black via-[#1111116d] to-black"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-20 flex items-center justify-center h-svh text-white"
      >
        <div className="bg-black bg-opacity-70 p-10 w-1/4 rounded-lg transition-all">
          <p className="text-4xl mb-4">{isSignIn ? "Sign In" : "Sign Up"}</p>
          {!isSignIn && (
            <input
              ref={name}
              className="w-full bg-[#151313] border rounded-md px-3 py-3 outline-none mb-5"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full bg-[#151313] border rounded-md px-3 py-3 outline-none"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            ref={password}
            className="w-full bg-[#151313] border rounded-md px-3 py-3 outline-none my-5"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500 font-semibold">{errorMessage}</p>
          <button
            className="bg-[#ff1621] px-3 py-2 rounded-md text-xl hover:bg-[#ec151f] transition-all w-full mt-6"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between mt-2">
            <span className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </span>
            <p>Need help?</p>
          </div>
          <div className="mt-9">
            <span>{isSignIn ? "New to Netflix?" : "Already registered"}</span>
            <Link
              to={"/login"}
              className="font-medium ml-2"
              onClick={toggleSignIn}
            >
              {isSignIn ? "Sign Up now" : "Sign In now"}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

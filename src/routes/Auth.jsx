import React, { useRef } from "react";
import ParticlesBg from "particles-bg";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Auth = () => {
  const buttonRef = useRef();
  const loginRef = useRef();
  const registerRef = useRef();

  // Functions for sliding effect on click
  const showLogin = () => {
    loginRef.current.style.left = "50%";
    loginRef.current.style.transform = "translateX(-50%)";
    registerRef.current.style.left = "150%";
    buttonRef.current.style.left = "0%";
  };

  const showRegister = () => {
    loginRef.current.style.left = "-150%";
    registerRef.current.style.left = "50%";
    registerRef.current.style.transform = "translateX(-50%)";

    buttonRef.current.style.left = "50%";
  };

  return (
    <div className="bg-black flex justify-center items-center h-screen p-10">
      <div className="absolute inset-0 z-0 bg-black ">
        <ParticlesBg type="cobweb" num={275} bg={true} color="#4150B5" />
      </div>

      {/* Auth Container */}
      <div className="p-8 z-10 bg-white  rounded-lg auth-shadow sm:w-4/6 sm:h-4/5  w-full relative     h-full overflow-hidden md:w-3/5 lg:w-2/5">
        <h1 className="text-center">Image AI APP</h1>

        {/* Sliding Button */}
        <div className="w-60 rounded-md  mx-auto my-9 shadow-md relative flex justify-around font-bold">
          <div
            id="btn"
            ref={buttonRef}
            className="absolute top-0 left-0 w-1/2 h-full bg-custom-gradient rounded-md transition-all duration-500"
          ></div>
          <button
            className="pointer bg-transparent relative py-2"
            onClick={showLogin}
          >
            Log In
          </button>
          <button
            onClick={showRegister}
            className="pointer bg-transparent relative py-2"
          >
            Register
          </button>
        </div>
        {/* Forms */}
        <div
          id="register"
          ref={registerRef}
          className="w-4/5 absolute transition-all duration-500"
          style={{
            left: "150%",
            transform: "translateX(-50%)",
          }}
        >
          <RegisterForm />
        </div>
        <div
          id="login"
          ref={loginRef}
          className="w-4/5 absolute transition-all duration-500"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;

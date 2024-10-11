import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const inputStyles = "border-b-2 border-solid border-blue m-2 outline-none";

  const onPasswordChange = (e) => setPassword(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/login", {
        email,
        password,
      });

      if (response.data) {
        setUser(response.data);
        navigate("/");
      } else {
        setErrorMessage("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("login failed.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col  rounded-md w-full">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        name="email"
        id="email"
        placeholder="email"
        required
        className={inputStyles}
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        name="password"
        id="password"
        placeholder="password"
        required
        className={inputStyles}
      />

      <button
        type="submit"
        className="w-1/2 self-center bg-gradient-to-r from-blue to-purple-400 rounded-xl px-8 py-2 my-5"
      >
        Signin
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;

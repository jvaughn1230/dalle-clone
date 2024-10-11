import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  const inputStyles = "border-b-2 border-solid border-blue m-2 outline-none";

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/register", {
        name,
        email,
        password,
      });

      if (response.data) {
        setUser(response.data);
        console.log(user);
        navigate("/");
      } else {
        setErrorMessage("Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Registration failed.");
    }
  };

  const onNameChange = (e) => setName(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="flex flex-col  rounded-md w-full"
      >
        <div className="mt-4">
          <input
            type="string"
            value={name}
            onChange={onNameChange}
            name="name"
            id="name"
            placeholder="name"
            required
            className={inputStyles}
          />
        </div>

        <div className="mt-4">
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
        </div>

        <div className="mt-4">
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
        </div>

        <button
          type="submit"
          className="w-1/2 self-center bg-gradient-to-r from-blue to-purple-400 px-8 py-2 rounded-xl my-5"
        >
          Register
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;

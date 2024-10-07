import React from "react";
import { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onPasswordChange = (e) => setPassword(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/login", {
        email,
        password,
      });

      if (response.data) {
        console.log("Login successful");
      } else {
        setErrorMessage("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("login failed.");
    }
  };

  return (
    <form onSubmit={handleSignin}>
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        name="email"
        id="email"
        placeholder="email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        name="password"
        id="password"
        placeholder="password"
        required
      />

      <button type="submit">Signin</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default SignInForm;

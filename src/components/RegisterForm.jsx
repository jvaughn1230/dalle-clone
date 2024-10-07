import React from "react";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/register", {
        name,
        email,
        password,
      });

      if (response.data) {
        console.log("Registration successful");
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
      <form onSubmit={handleRegister}>
        <input
          type="string"
          value={name}
          onChange={onNameChange}
          name="name"
          id="name"
          placeholder="name"
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
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          name="email"
          id="email"
          placeholder="email"
          required
        />
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Auth from "./routes/Auth";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Auth />} path="/auth" />
      <Route element={<Register />} path="/register" />
      <Route element={<ProtectedRoutes />}>
        <Route element={<Home />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./routes/Register";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<SignIn />} path="/signin" />
      <Route element={<Register />} path="/register" />
      <Route element={<ProtectedRoutes />}>
        <Route element={<Home />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/feature/login/index";
import Signup from "./components/feature/signup/index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

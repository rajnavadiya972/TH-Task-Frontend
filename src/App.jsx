import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import UserPost from "./pages/userPost";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/mypost" element={<UserPost />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default App;

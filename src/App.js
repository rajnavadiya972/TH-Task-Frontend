import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/feature/Login";
import Signup from "./components/feature/Signup";

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

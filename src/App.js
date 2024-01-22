import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/feature/Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

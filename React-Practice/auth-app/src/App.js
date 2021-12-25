import Navigation from "./components/MainHeader/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

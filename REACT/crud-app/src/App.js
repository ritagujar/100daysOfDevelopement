import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

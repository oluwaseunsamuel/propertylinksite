import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
//import About from "./pages/About";
//import Services from "./pages/Services";
//import ViewEstate from "./pages/ViewEstate";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";


function App() {
  return (
    <>
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

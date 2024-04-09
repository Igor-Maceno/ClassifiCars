import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//Page
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Vehicle from "./pages/vehicle/Vehicle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/vehicle" element={<Vehicle/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

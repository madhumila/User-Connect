import React from "react";
import RegistrationForm from "./Componenets/RegistrationForm";
import Login from "./Componenets/Login";
import Home from "./Componenets/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Componenets/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

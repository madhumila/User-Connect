import React from "react";
import RegistrationForm from "./Componenets/RegistrationForm";
import Login from "./Componenets/Login";
import UsersTable from "./Componenets/UsersTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Componenets/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/users" element={<UsersTable />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

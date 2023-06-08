import React, { useState } from "react";
import "./Login.css"
import { BASE_URL } from "../constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Feature/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
  const [data, setData] = useState({
    email:"",
    password:""
  });
//   const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
    // use axios.post to send the username and password for a check in the backend and to receive the jwt in return 
   
   const handleLogin =(e)=>{
    e.preventDefault();
    axios.post(`${BASE_URL}/login`,data)
    .then(function (response) {
      console.log(response.data);
      dispatch(login(response.data))
      nav("/profile")

    })
    .catch(function (error) {
     alert("Invalid data");
    });
  };
  
  return (
    <div className="login-container">
      <h2>Welcome to UserPedia</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Username or email address</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <br/>
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};

export default LoginPage;

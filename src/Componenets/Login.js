import React, { useState } from "react";
import "./Login.css"
import { BASE_URL } from "../constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Feature/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      localStorage.setItem("token", response.data.accessToken)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      nav("/")
    })
    .catch(function (error) {
     alert("Invalid email or password");
    });
  };
  
  return (
    <div className="login-container">
      <h2> Sign in to User Connect</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-container">
        <div className="input"> 
          {/* <label>Email:</label>
          <br/> */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="email"
            required
          />
        </div>
        <div className="input">
          {/* <label>Password:</label>
          <br/> */}
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>
        </div>
        <button className="input-button" type="submit">Sign In</button>
      </form>
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};

export default Login;

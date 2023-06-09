import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import { logout, updateUser, getUser } from "../Feature/authSlice";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/${JSON.parse(localStorage.getItem("user")).id}`)
      .then(function (response) {
        dispatch(getUser(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    nav("/signin");
    dispatch(logout());
  };

  const handleEdit = () => {
    setEditing(true);
    setUpdatedUser({ ...user });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    axios
      .patch(`${BASE_URL}/664/users/${user.id}`, updatedUser, { headers })
      .then(function (response) {
        console.log(response.data);
        alert("successfully updated");
        dispatch(updateUser(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    setEditing(false);
  };

  return (
    <div className="profile-main">
      {user !== null && Object.keys(user).length !== 0 ? (
        <>
          <div className="header">
            <button>
              <Link className="users-hyperlink" to="/users">
                all users
              </Link>
            </button>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className="profile-container">
            <h2>Hello {user.firstName} </h2>
            <p>
              First Name:{" "}
              {editing ? (
                <input
                  type="text"
                  name="firstName"
                  value={updatedUser.firstName}
                  onChange={handleChange}
                  defaultValue={user.firstName}
                />
              ) : (
                user.firstName
              )}
            </p>
            <p>
              Last Name:{" "}
              {editing ? (
                <input
                  type="text"
                  name="lastName"
                  value={updatedUser.lastName}
                  onChange={handleChange}
                  defaultValue={user.lastName}
                />
              ) : (
                user.lastName
              )}
            </p>
            <p>Email:{user.email}</p>
            <p>
              Phone Number:{" "}
              {editing ? (
                <input
                  type="tel"
                  name="phoneNumber"
                  value={updatedUser.phoneNumber}
                  onChange={handleChange}
                  defaultValue={user.phoneNumber}
                />
              ) : (
                user.phoneNumber
              )}
            </p>
            <p>
              Country:{" "}
              {editing ? (
                <input
                  type="text"
                  name="country"
                  value={updatedUser.country}
                  onChange={handleChange}
                  defaultValue={user.country}
                />
              ) : (
                user.country
              )}
            </p>
            {editing ? (
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className="edit-btn" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css"
import axios from "axios";
import { BASE_URL } from "../constants";
import { updateUser } from "../Feature/authSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.accessToken);

  const dispatch = useDispatch();


  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleEdit = () => {
    setEditing(true);
    setUpdatedUser({ ...user });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    // onUpdate(updatedUser);
    console.log(
      'tok             ;', token
    );
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  
    }
    axios.patch(`${BASE_URL}/664/users/${user.id}`,updatedUser, {headers})
    .then(function (response) {
      console.log(response.data);
      alert("successfully updated")
      dispatch(updateUser(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
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
      <p>
        Email:{user.email}
      </p>
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
        <button className="save-btn" onClick={handleSave}>Save</button>
      ) : (
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default Profile;

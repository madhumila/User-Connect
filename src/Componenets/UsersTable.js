import React, { useEffect, useState } from "react";
import "./UsersTable.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants";
import { getAllUsers } from "../Feature/authSlice";
import Download from "./Download";
import {Link} from "react-router-dom"
const UsersTable = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  let users = useSelector((state) => state.auth.users);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/users`)
      .then(function (response) {
        dispatch(getAllUsers(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [users]);
  
  const handleDelete = (id) => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .delete(`${BASE_URL}/664/users/${id}`, { headers })
      .then(function (response) {
        console.log(response.data);
        users.filter((user) => user.id !== id);
        alert("successfully deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="user-details-container">
      <table className="user-details-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.country}</td>
              <td>{user.email}</td>
              {<button hidden={currentUser && user.id === currentUser.id} onClick={() => handleDelete(user.id)}>Delete</button>}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
      <Download/>
      <button><Link className="back-button" to="/">Back</Link></button>
      </div>
      

    </div>
  );
};

export default UsersTable;

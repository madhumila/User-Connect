import React, { useEffect } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../constants'
import { getUsers } from '../Feature/authSlice'


const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.auth.users)
  useEffect(()=>{
    axios.get(`${BASE_URL}/users`)
    .then(function (response) {
      console.log(response.data);
      dispatch(getUsers(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  })
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

            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index+1}</td>

                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.country}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Home

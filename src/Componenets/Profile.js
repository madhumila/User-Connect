import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
 const user = useSelector((state) => state.auth.user)
console.log(user);
  return (
    <div>
    <h2>Profile Page</h2>
    <p>Name: {user.firstName} {user.lastName}</p>
    <p>Email: {user.email}</p>
    <p>Phone Number: {user.phoneNumber}</p>
    <p>Qualification: {user.country}</p>
  </div>
  )
}

export default Profile

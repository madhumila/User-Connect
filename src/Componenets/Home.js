import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="user-details-container">
       <table className="user-details-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Country</th>
              <th>Email</th>

            </tr>
          </thead>
          <tbody>
            {/* {userDetails.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.qualification}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
    </div>
  )
}

export default Home

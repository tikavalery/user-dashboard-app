import React from 'react'
import {Link} from "react-router-dom"

const User = ({ user }) => {
  console.log(user)
  return (
    <>
    
      <tr>
    <th> {user.name.first} {user.name.last}</th>
    <th>{user.phone}</th>
        <th>{user.email}</th>
        <th>{user.location.city}</th>
        <th>{user.gender}</th>
        <th>{user.dob.date}</th>
        <th><Link to= {`/userdetails/${user.login.uuid} `}>View More</Link></th>
  </tr> 
      {/* <p>{`Full Name: ${user.name.first} ${user.name.last}`}</p>
      <p>{`Phone: ${user.phone}`}</p>
      <p>Email</p>
      <p>City</p>
      <p>Gender</p>
      <p>Phone Number</p>
      <Link to= {`/userdetails/${user.login.uuid} `}>View More</Link>  */}
    </>
  )
}

export default User

{/* <table class="table table-striped">
<thead>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>john@example.com</td>
  </tr>
  <tr>
    <td>Mary</td>
    <td>Moe</td>
    <td>mary@example.com</td>
  </tr>
  <tr>
    <td>July</td>
    <td>Dooley</td>
    <td>july@example.com</td>
  </tr>
</tbody>
</table> */}
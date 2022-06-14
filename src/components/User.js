import React from 'react'
import {Link} from "react-router-dom"

const User = ({ user }) => {

  return (
    <>
    
      <tr>
    <th> {user.name.first} {user.name.last}</th>
    <th>{user.phone}</th>
        <th>{user.email}</th>
        <th>{user.location.city}</th>
        <th>{user.gender}</th>
   
        <th><Link to= {`/userdetails/${user.login.uuid} `}>View More</Link></th>
  </tr> 
 
    </>
  )
}

export default User


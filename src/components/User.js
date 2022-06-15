import React from 'react'
import { Link } from "react-router-dom"
import "./User.css"

const User = ({ user }) => {

  return (
    <>
    
      <tr className='user'>
    <th className='userItem'> {user.name.first} {user.name.last}</th>
    <th className='userItem'>{user.phone}</th>
        <th className='userItem'>{user.email}</th>
        <th className='userItem'>{user.location.city}</th>
        <th className='userItem'>{user.gender}</th>
   
        <th><Link to= {`/userdetails/${user.login.uuid} `}>View More</Link></th>
  </tr> 
 
    </>
  )
}

export default User


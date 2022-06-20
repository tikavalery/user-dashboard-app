import React from 'react'
import { Link, useHistory } from "react-router-dom";
import "./User.css"

const User = ({ user }) => {
  const history = useHistory();
  return (
    <>
    
      <tr className='user'>
    <th className='userItem'>    {" "}
          {user.name.first} {user.name.last}</th>
    <th className='userItem'>{user.phone}</th>
        <th className='userItem'>{user.email}</th>
        <th className='userItem'>{user.location.city}</th>
        <th className='userItem'>{user.gender}</th>
   
        <th>      <span
            style={{
              cursor: "pointer",
              color: "#007bff",
            }}
            onClick={() => {
              localStorage.setItem(
                "recentlyViewed",
                JSON.stringify(user.login.uuid)
              );
              history.push(`/userdetails/${user.login.uuid}`);
            }}
          >
            View More
          </span></th>
  </tr> 
 
    </>
  )
}

export default User


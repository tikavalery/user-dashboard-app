import React, {useContext, useState,useEffect} from 'react'
import Users from '../components/users';
import Pagination from '../components/Pagination';
import axios from 'axios';
import { USER_PER_PAGE } from "../utils/constants";
import {GlobalState} from '../GlobalState'

function UserDashBoard() {
  const state = useContext(GlobalState)
  console.log(state)
  const [users, setUsers] = state.users

   const [page, setPage] = state.page
  const [totalPages, setTotalPages] = state.totalPages

  const [loading, setLoading] = useState(false);
 
console.log(users)
  // useEffect(() => {
  //   console.log("In useeffect")
  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://randomuser.me/api/?results=100');
  //     setLoading(false);
  //     window.localStorage.setItem("userdata", JSON.stringify(res))
  //     // setUsers(res.data.results);
  //     window.localStorage.setItem("userdata", JSON.stringify(users))
  //     setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
  //   };
  //   fetchUsers();
  // },[]);

  console.log("After useeffect")
  const handleClick = num => {
    setPage(num);
  }

  const handlePrevious = num => {
    let previousPage = page - 1
    console.log(page)
  }
// console.log(page)
  return (
    <div className='col-10' >
      <h1>Users Dashboard</h1>
      <button onClick ={handlePrevious} >Show Previous results</button>
      <p>Page {page}</p>
      {loading ? <p>Loading...</p> : <>
      <table class="table table-striped">
<thead>
  <tr>
    <th>Fullname</th>
    <th>Phone</th>
              <th>Email</th>
              <th>City</th>
    <th>Gender</th>
              <th>Date of Birth</th>
              <th>View More</th>
  </tr>
</thead>
<tbody>
            <Users users={users} page={page} />
            </tbody>
</table>
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </> }
    </div>
  );
}

export default UserDashBoard;

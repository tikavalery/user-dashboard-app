import React, {useContext, useState,useEffect} from 'react'
import Users from '../components/users';
import Pagination from '../components/Pagination';
import axios from 'axios';
import { USER_PER_PAGE } from "../utils/constants";
import {GlobalState} from '../GlobalState'

function UserDashBoard() {
  const state = useContext(GlobalState)
  const [users, setUsers] = state.users
   const [page, setPage] = state.page
  const [totalPages, setTotalPages] = state.totalPages

  const [loading, setLoading] = useState(false);



  const handleClick = num => {
    setPage(num);
  }

  const handlePrevious = num => {
    let previousPage = page - 1

  }

  return (
    <div className='col-10' >
      <h4>Users Dashboard</h4>
      {/* <button onClick={handlePrevious} >Show Previous results</button> */}
      <Pagination totalPages={totalPages} handleClick={handleClick} />
     
      {loading ? <p>Loading...</p> : <>
      <table class="table table-striped">
<thead>
  <tr>
    <th>Fullname</th>
    <th>Phone</th>
              <th>Email</th>
              <th>City</th>
    <th>Gender</th>
           
              <th>View More</th>
  </tr>
</thead>
<tbody>
            <Users users={users} page={page} />
            </tbody>
</table>
<p>Page {page}</p>
      </> }
    </div>
  );
}

export default UserDashBoard;

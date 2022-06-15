import React, {useContext, useState} from 'react'
import Users from '../components/users';
import Pagination from '../components/Pagination';
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
    <div className='col-10 container-fluid'  >
      <div className='row' ><h4 className = "col-3">Users Dashboard</h4><Pagination className = "col-8 "totalPages={totalPages} handleClick={handleClick} /></div>
      
      
     
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

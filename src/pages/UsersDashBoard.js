import React, {useContext, useState,useEffect} from 'react'
import Users from '../components/users';
import Pagination from '../components/Pagination';
import {GlobalState} from '../GlobalState'
import axios from "axios";
import { USER_PER_PAGE } from "../utils/constants";
import { useHistory } from "react-router-dom";
import "./UsersDashBoard.css";

function UserDashBoard() {
  const state = useContext(GlobalState)
  const [users, setUsers] = state.users
  const [page, setPage] = state.page
  const [totalPages, setTotalPages] = state.totalPages
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setAllUsers(users);
    setSearchData(users);
  }, [state?.users]);
  const handleSearch = (value) => {
    const newData = searchData.filter((user) => {
      const itemData = ` ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`;

      const textData = value.toUpperCase();
      console.log("Result", itemData.indexOf(textData) > -1);
      return itemData.indexOf(textData) > -1;
    });

    setAllUsers(newData);
  };
 
  const handleClick = (num) => {
    localStorage.setItem("pageNumber", num);
    setPage(num);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page > 1) {
      setPage(page + 1);
    }
  };
  const handleRecentViewedPerson = (num) => {
    const recentlyViewd = localStorage
      .getItem("recentlyViewed")
      .replace(/^"(.+(?="$))"$/, "$1");
    console.log("recentlyViewd", recentlyViewd);
    history.push(`/userdetails/${recentlyViewd} `);
  };

  return (
         <div className='col-10 container-fluid'  >
         <div className='row' >
           {searchText.length > 0 ? null : (
             <Pagination className = "col-6 "totalPages={totalPages} handleClick={handleClick} handleNext={handleNext} handlePrevious ={handlePrevious} />
          )}
       
          <div className="search-container col-3">
          <span>
            <input
            placeholder ="Search"
              className="user-search-input"
              onPaste={(e) => {
                navigator.clipboard.readText().then((text) => {
                  e.preventDefault();

                  setSearchText(text);
                  handleSearch(text);
                });
              }}
              value={searchText}
              onChange={(e) => {
                e.preventDefault();

                setSearchText(e.target.value.trim());
                handleSearch(e.target.value);
              }}
              type="text"
              id="fname"
              name="fname"
            />
          </span>
          </div>
   
           
          <div className="container-fluid">
              <div className ="row"> 
            <div className = "col-3"><p>Page {page}</p></div>
          <div className ="col-3"> <button style={{ marginLeft: "5px" }} onClick={handleRecentViewedPerson}>  Show Recently Viewed Person</button>
          </div>
        
           </div>
            </div>

           </div>
        
      
      
     
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
               <Users
                users={allUsers}
                page={page}
                isSearching={searchText.length > 0}
              />
            </tbody>
</table>

      </> }
    </div>
  );
}

export default UserDashBoard;

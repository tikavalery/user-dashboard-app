import React, { createContext, useState, useEffect } from 'react'
import { USER_PER_PAGE } from "./utils/constants";


import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
      
        const fetchUsers = async () => {
          setLoading(true);
            const res = await axios.get('https://randomuser.me/api/?results=100');
       
          setLoading(false);
          window.localStorage.setItem("userdata", JSON.stringify(res))
          setUsers(res.data.results);
            
          setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
        };
        fetchUsers();
      },[]);

    
    const state = {
   
        users: [users,setUsers],
        page:[ page,setPage],
        totalPages:[totalPages,setTotalPages]
   
    }



    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
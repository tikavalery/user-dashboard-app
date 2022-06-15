import React from 'react'

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  console.log(pages)
  return (
    <div>
      <ul class="pagination">
        {pages.map(num => (
      
         <li className = "page-item"  key={num}
         onClick={() => handleClick(num)}><a class="page-link" href="#">{num}</a></li>
 
      ))}
      </ul>  
    </div>
  )
}

export default Pagination



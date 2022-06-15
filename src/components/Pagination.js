import React from 'react'

const Pagination = ({ totalPages, handleClick,handleNext,handlePrevious }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  console.log(pages)
  return (
    <div>
      <ul class="pagination">
      <li className = "page-item" 
         onClick={() => handlePrevious()}><a class="page-link" href="#">Previous</a></li>
        {pages.map(num => (
      
         <li className = "page-item"  key={num}
         onClick={() => handleClick(num)}><a class="page-link" href="#">{num}</a></li>
 
      ))}
      <li className = "page-item"  
         onClick={() => handleNext()}><a class="page-link" href="#">Next</a></li>
      </ul>  
    </div>
  )
}

export default Pagination



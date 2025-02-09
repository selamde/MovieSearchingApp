import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
        <IoSearch className='text-white text-2xl' />
        <input type="text" placeholder='Search Here....' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        </div>
    </div>
  )
}

export default Search
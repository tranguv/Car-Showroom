"use client"
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'

const SearchBar = () => {
  const  [manufacturer, setManufacturer] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    console.log('searching...')
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div  className='searchbar__item'>
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar

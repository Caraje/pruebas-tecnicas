import React, { useState } from 'react'
import { SearchIcon } from './Icons'

const SearchBooks = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  return (
    <form
      onSubmit={(event) => { handleSearch(event) }}
      className='max-w-[90rem] w-full py-4 flex align-middle gap-2'
    >
      <label className='flex w-full gap-4'>
        <input
          type='text'
          name='search'
          placeholder='Busca el libro que quieras'
          className='border border-caraje-grey rounded-md w-full grow-1 px-4'
          value={search}
          onInput={(event) => { setSearch(event.target.value) }}
        />
      </label>
      <button className='p-2 '><SearchIcon /></button>
    </form>
  )
}

export default SearchBooks

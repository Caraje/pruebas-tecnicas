import React from 'react'

const CardBookReading = ({ book, filterList }) => {
  return (
    <li
      className='flex gap-4 w-full align-middle hover:bg-caraje-grey rounded-md p-2 hover:cursor-pointer'
      onClick={() => { filterList(book) }}
    >
      <picture className='w-2/6 object-cover  shadow-lg'>
        <img
        className='rounded-md w-full'
          src={book.book.cover}
          alt={`Portada del libro ${book.book.title}`}
          width={100} />
      </picture>
      <section className='w-3/6 flex flex-col gap-2 pt-2'>
        <div>
          <h3 className='text-caraje-darkBeige font-bold text-lg leading-tight'>{book.book.title}</h3>
          <h4 className='text-caraje-Beige font-normal text-xs'>{book.book.author.name}</h4>
        </div>
        <p className='text-caraje-darkBeige font-normal text-xs'>{book.book.synopsis}</p>
      </section>
    </li>
  )
}

export default CardBookReading

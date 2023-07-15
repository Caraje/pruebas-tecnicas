import React from 'react'
import CardBook from './CardBook'

const ListOfBooks = ({ library }) => {
  return (
    <section className='max-w-[90rem]'>
      <header
        className='w-full text-caraje-salmon font-montserrat font-extrabold text-3xl my-4'
      >
        <h1>Libros Disponibles</h1>
      </header>
      <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {
          library.map(book => {
            return (
            <article
            key={book.book.ISBN}
            className='max-w-[20rem]'
            >
              <CardBook book={book.book}/>

            </article>
            )
          })
        }
      </section>
    </section>
  )
}

export default ListOfBooks

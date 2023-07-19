import CardBook from './CardBook'

const ListOfBooks = ({ library, deleteBooks, readingBooks, addBooks }) => {
  const filterBooks = (book) => {
    const isIncluded = readingBooks.some((p) => p.book.ISBN === book.book.ISBN)
    if (!isIncluded) {
      addBooks([...readingBooks, book])
      deleteBooks(library.filter((p) => p.book.ISBN !== book.book.ISBN))
    } else {
      addBooks(readingBooks.filter((p) => p.book.ISBN !== book.book.ISBN))
      deleteBooks([...library, book])
    }
  }
  return (
    <section className='max-w-[90rem]'>
      <header
        className='w-full text-caraje-salmon font-montserrat font-extrabold text-3xl my-4'
      >
        <h1>Libros Disponibles</h1>
        <p className='text-caraje-Beige font-medium text-xs mb-6' >Libros disponibles: <span className='text-caraje-darkBeige text-sm font-semibold+'>{library?.length}</span></p>
      </header>
      <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {
          library?.sort((a, b) => a.book.title.localeCompare(b.book.title)).map(book => {
            return (
            <article
            key={book.book.ISBN}
            className='max-w-[20rem] p-2 rounded-md hover:cursor-pointer hover:bg-caraje-grey'
            onClick={() => { filterBooks(book) }}
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

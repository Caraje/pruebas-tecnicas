import CardBookReading from './CardBookReading'

const ReadingList = ({ library, deleteBooks, readingBooks, addBooks }) => {
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
    <>
      <h2 className='w-full text-caraje-salmon font-montserrat font-bold text-xl'>Lista de lectura</h2>
      <p className='text-caraje-Beige font-medium text-xs mb-6' >Libros en la lista: <span className='text-caraje-darkBeige text-sm font-semibold+'>{readingBooks?.length}</span></p>
      <ul className='flex gap-2 flex-col '>
        {
          readingBooks?.sort((a, b) => a.book.title.localeCompare(b.book.title)).map((book, idx) => (
            <CardBookReading
              key={idx}
              book={book}
              filterList={filterBooks}

            />
          ))
        }
      </ul>
    </>
  )
}

export default ReadingList

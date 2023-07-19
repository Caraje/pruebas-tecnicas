import { library } from '../../../books.json'
import { getGenres } from '../utils/genres'

const GenreSelector = ({ set }) => {
  const actualLibrary = Object.values(library)
  const genres = getGenres(library)
  return (
    <>
      <h2 className='w-full text-caraje-salmon font-montserrat font-bold text-xl my-4'>Generos</h2>
      <ul>
        <li
          className='text-caraje-darkBeige font-montserrat font-medium hover:cursor-pointer hover:text-caraje-salmon'
          onClick={() => { set(actualLibrary) }}
          >
          Todos
        </li>
        {
          genres.map((opt, idx) => (
            <li
            key={idx}
            className='text-caraje-darkBeige font-montserrat font-medium hover:cursor-pointer hover:text-caraje-salmon'
            onClick={() => { set(actualLibrary.filter(el => el.book.genre.toLowerCase().includes(opt.toLowerCase()))) }}
            >
              {opt}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default GenreSelector

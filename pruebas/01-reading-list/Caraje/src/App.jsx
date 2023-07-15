import './App.css'
import { library } from '../../books.json'

function App () {
  // console.log(typeof library)
  const libraries = Object.entries(library)
  console.log(libraries)
  return (
    libraries.map(el => (
        <h1 key={el[1].book.ISBN}>{el[1].book.title}</h1>
    ))

  )
}

export default App

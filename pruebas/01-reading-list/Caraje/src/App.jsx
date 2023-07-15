import './App.css'
import { library } from '../../books.json'
import ListOfBooks from './components/ListOfBooks'
import { useState } from 'react'
import SearchBooks from './components/SearchBooks'

function App () {
  const actualLibrary = Object.values(library)
  const [booksAbaliables, setBooksAbaliables] = useState(actualLibrary)
  const handleSearch = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { search } = Object.fromEntries(formData.entries())
    setBooksAbaliables(actualLibrary.filter(el => el.book.title.toLowerCase().includes(search.toLowerCase())))
  }
  return (
    <section className='bg-caraje-white w-full flex gap-4'>
      <aside className='min-h-screen bg-caraje-darkBeige w-60'>
        <section>
          Barra de opciones / generos
        </section>
        <section>
          Lista de pendientes de lectura
        </section>
      </aside>
      <main className='bg-neutral-300 w-full'>
        <SearchBooks handleSearch={handleSearch} />
        <ListOfBooks library={booksAbaliables}/>
      </main>
    </section>
  )
}

export default App

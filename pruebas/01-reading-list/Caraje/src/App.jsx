import { useEffect, useState } from 'react'
import { library } from '../../books.json'
import ListOfBooks from './components/ListOfBooks'
import SearchBooks from './components/SearchBooks'
import GenreSelector from './components/GenreSelector'
import ReadingList from './components/ReadingList'
import './App.css'

function App () {
  const localBooks = localStorage.getItem('allOfBooks')
  const localList = localStorage.getItem('readingBooks')
  const [allOfBooks, setAllOfBooks] = useState(library)
  const [readingBooks, setReadingBooks] = useState([])
  useEffect(() => {
    if (localBooks) {
      setAllOfBooks(JSON.parse(localBooks))
    }
    if (localList) {
      setReadingBooks(JSON.parse(localList))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('allOfBooks', JSON.stringify(allOfBooks))
    localStorage.setItem('readingBooks', JSON.stringify(readingBooks))
  }, [allOfBooks, readingBooks])

  // console.log({ allOfBooks, readingBooks })

  const handleSearch = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { search } = Object.fromEntries(formData.entries())
    setAllOfBooks(library.filter(el => el.book.title.toLowerCase().includes(search.toLowerCase())))
  }
  return (
    <section className='bg-caraje-white w-full flex gap-4 p-4'>
      <aside className='min-h-screen bg-caraje-white w-96 flex flex-col gap-4'>
        <picture className='flex align-middle justify-center border-b-[1px] border-y-caraje-grey'>
          <svg viewBox="0 0 395.52 73.63516879306069" height="73.63516879306069" width="200"><g><svg viewBox="0 0 505.7642147924451 94.15967163665933" height="73.63516879306069" width="395.52"><g transform="matrix(1,0,0,1,0,13.01338443024742)"><svg viewBox="0 0 395.52 68.13290277616449" height="68.13290277616449" width="395.52"><g id="textblocktransform"><svg viewBox="0 0 395.52 68.13290277616449" height="68.13290277616449" width="395.52" id="textblock"><g><svg viewBox="0 0 395.52 68.13290277616449" height="68.13290277616449" width="395.52"><g transform="matrix(1,0,0,1,0,0)"><svg width="395.52" viewBox="3.25 -35.45000076293945 210.16000366210938 36.209999084472656" height="68.13290277616449" data-palette-color="#6b7280"><path d="M31.25-10.5L31.25-10.5Q31.25-8.33 30.42-6.42 29.59-4.52 28.16-3.09 26.73-1.66 24.83-0.83 22.92 0 20.75 0L20.75 0 3.25 0 3.25-35.01 20.75-35.01Q22.92-35.01 24.83-34.18 26.73-33.35 28.16-31.92 29.59-30.49 30.42-28.59 31.25-26.68 31.25-24.51L31.25-24.51Q31.25-23.54 30.98-22.51 30.71-21.48 30.22-20.53 29.74-19.58 29.05-18.8 28.37-18.02 27.54-17.5L27.54-17.5Q28.39-17.04 29.08-16.25 29.76-15.45 30.25-14.5 30.74-13.55 30.99-12.51 31.25-11.47 31.25-10.5ZM10.25-13.99L10.25-7.01 20.75-7.01Q21.48-7.01 22.12-7.28 22.75-7.54 23.23-8.02 23.71-8.5 23.97-9.13 24.24-9.77 24.24-10.5L24.24-10.5Q24.24-11.23 23.97-11.87 23.71-12.5 23.23-12.98 22.75-13.45 22.12-13.72 21.48-13.99 20.75-13.99L20.75-13.99 10.25-13.99ZM10.25-28L10.25-21 20.75-21Q21.48-21 22.12-21.26 22.75-21.53 23.23-22.01 23.71-22.49 23.97-23.13 24.24-23.78 24.24-24.51L24.24-24.51Q24.24-25.24 23.97-25.88 23.71-26.51 23.23-26.99 22.75-27.47 22.12-27.73 21.48-28 20.75-28L20.75-28 10.25-28ZM70.85-17.36L70.85-17.36Q70.85-14.87 70.2-12.56 69.55-10.25 68.38-8.24 67.21-6.23 65.55-4.57 63.89-2.91 61.89-1.72 59.89-0.54 57.57 0.11 55.25 0.76 52.76 0.76L52.76 0.76Q50.27 0.76 47.96 0.11 45.65-0.54 43.64-1.72 41.62-2.91 39.96-4.57 38.3-6.23 37.12-8.24 35.94-10.25 35.29-12.56 34.64-14.87 34.64-17.36L34.64-17.36Q34.64-19.85 35.29-22.17 35.94-24.49 37.12-26.49 38.3-28.49 39.96-30.15 41.62-31.81 43.64-32.98 45.65-34.16 47.96-34.8 50.27-35.45 52.76-35.45L52.76-35.45Q55.25-35.45 57.57-34.8 59.89-34.16 61.89-32.98 63.89-31.81 65.55-30.15 67.21-28.49 68.38-26.49 69.55-24.49 70.2-22.17 70.85-19.85 70.85-17.36ZM63.89-17.36L63.89-17.36Q63.89-19.65 63.01-21.69 62.13-23.73 60.63-25.23 59.13-26.73 57.09-27.61 55.05-28.49 52.76-28.49L52.76-28.49Q50.44-28.49 48.41-27.61 46.38-26.73 44.87-25.23 43.36-23.73 42.48-21.69 41.6-19.65 41.6-17.36L41.6-17.36Q41.6-15.06 42.48-13.05 43.36-11.04 44.87-9.52 46.38-8.01 48.41-7.13 50.44-6.25 52.76-6.25L52.76-6.25Q55.05-6.25 57.09-7.13 59.13-8.01 60.63-9.52 62.13-11.04 63.01-13.05 63.89-15.06 63.89-17.36ZM109.74-17.36L109.74-17.36Q109.74-14.87 109.09-12.56 108.44-10.25 107.27-8.24 106.1-6.23 104.44-4.57 102.78-2.91 100.78-1.72 98.77-0.54 96.45 0.11 94.14 0.76 91.65 0.76L91.65 0.76Q89.16 0.76 86.85 0.11 84.54-0.54 82.53-1.72 80.51-2.91 78.85-4.57 77.19-6.23 76.01-8.24 74.82-10.25 74.18-12.56 73.53-14.87 73.53-17.36L73.53-17.36Q73.53-19.85 74.18-22.17 74.82-24.49 76.01-26.49 77.19-28.49 78.85-30.15 80.51-31.81 82.53-32.98 84.54-34.16 86.85-34.8 89.16-35.45 91.65-35.45L91.65-35.45Q94.14-35.45 96.45-34.8 98.77-34.16 100.78-32.98 102.78-31.81 104.44-30.15 106.1-28.49 107.27-26.49 108.44-24.49 109.09-22.17 109.74-19.85 109.74-17.36ZM102.78-17.36L102.78-17.36Q102.78-19.65 101.9-21.69 101.02-23.73 99.52-25.23 98.02-26.73 95.98-27.61 93.94-28.49 91.65-28.49L91.65-28.49Q89.33-28.49 87.3-27.61 85.27-26.73 83.76-25.23 82.25-23.73 81.37-21.69 80.49-19.65 80.49-17.36L80.49-17.36Q80.49-15.06 81.37-13.05 82.25-11.04 83.76-9.52 85.27-8.01 87.3-7.13 89.33-6.25 91.65-6.25L91.65-6.25Q93.94-6.25 95.98-7.13 98.02-8.01 99.52-9.52 101.02-11.04 101.9-13.05 102.78-15.06 102.78-17.36ZM121.33-7.01L121.33 0 114.32 0 114.32-35.01 121.33-35.01 121.33-17.5 134.37-35.01 142.33-35.01 131.27-20.24 142.33 0 134.37 0 126.68-14.16 121.33-7.01ZM152.58-35.01L152.58 0 145.57 0 145.57-35.01 152.58-35.01ZM166.08-13.99L166.08 0 159.07 0 159.07-35.01 183.58-35.01 183.58-28 166.08-28 166.08-21 176.57-21 176.57-13.99 166.08-13.99ZM202.91-10.96L202.91 0 195.93 0 195.93-10.96Q193.61-11.55 191.67-12.84 189.73-14.14 188.34-15.93 186.95-17.72 186.18-19.91 185.41-22.09 185.41-24.51L185.41-24.51 185.41-35.01 192.42-35.01 192.42-24.51Q192.42-23.07 192.97-21.79 193.52-20.51 194.47-19.56 195.42-18.6 196.7-18.05 197.98-17.5 199.42-17.5L199.42-17.5Q200.86-17.5 202.15-18.05 203.43-18.6 204.38-19.56 205.33-20.51 205.88-21.79 206.43-23.07 206.43-24.51L206.43-24.51 206.43-35.01 213.41-35.01 213.41-24.51Q213.41-22.09 212.64-19.91 211.87-17.72 210.48-15.93 209.09-14.14 207.16-12.84 205.23-11.55 202.91-10.96L202.91-10.96Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#46443C" className="wordmark-text-0" data-fill-palette-color="primary" id="text-0"></path></svg></g></svg></g></svg></g></svg></g><g transform="matrix(1,0,0,1,411.6045431557858,0)"><svg viewBox="0 0 94.15967163665933 94.15967163665933" height="94.15967163665933" width="94.15967163665933"><g data-palette-color="#46443C"><rect width="25.736976914020214" height="94.15967163665933" fill="#46443C" stroke="transparent" data-fill-palette-color="accent" x="0" fillOpacity="1"></rect><rect width="25.736976914020214" height="94.15967163665933" fill="#96988C" stroke="transparent" data-fill-palette-color="accent" x="31.386557212219774" fillOpacity="0.75"></rect><rect width="25.736976914020214" height="94.15967163665933" fill="#D2C9A1" stroke="transparent" data-fill-palette-color="accent" x="62.77311442443955" fillOpacity="0.5"></rect></g></svg></g></svg></g><defs></defs></svg>
        </picture>
        <section className=' border-b-[1px] pb-5  border-y-caraje-grey'>
          <GenreSelector set={setAllOfBooks}/>
        </section>

        <section className='flex flex-col'>
          <ReadingList library={allOfBooks} deleteBooks={setAllOfBooks} readingBooks={readingBooks} addBooks={setReadingBooks}/>
        </section>
      </aside>
      <main className='bg-neutral-300 w-full'>
        <SearchBooks handleSearch={handleSearch} />
        <ListOfBooks library={allOfBooks} deleteBooks={setAllOfBooks} readingBooks={readingBooks} addBooks={setReadingBooks}/>
      </main>
    </section>
  )
}

export default App

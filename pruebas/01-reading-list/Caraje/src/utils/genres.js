export const getGenres = (data) => {
  const actualLibrary = Object.values(data)
  const genres = [...new Set(actualLibrary.map(opt => (
    opt.book.genre
  )))]
  return genres
}

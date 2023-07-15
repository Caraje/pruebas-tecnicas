import React from 'react'

const CardBook = ({ book }) => {
  const { title, cover, author } = book
  return (
    <>
      <img
        src={cover}
        alt={`Portada de ${title}`}
        width={250}
        className='h-[23rem] aspect-auto  object-cover shadow-md rounded-md'
      />
      <h2 className='font-montserrat text-xl font-bold text-caraje-darkBeige  overflow-hidden text-overflow-ellipsis'
      >{title}</h2>
      <h3
        className='font-montserrat text-xs text-caraje-Beige'
      >{author.name}</h3>
    </>
  )
}

export default CardBook

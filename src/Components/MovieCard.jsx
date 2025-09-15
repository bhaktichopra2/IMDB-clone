import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div className='h-[30vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-3' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`}} >

      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
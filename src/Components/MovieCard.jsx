import React from 'react'

function MovieCard({movieObj, poster_path, name, handleAddWatchList }) {
  return (
    <div className='h-[30vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-3 flex flex-col justify-between ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }} >

        <div onClick={()=>(handleAddWatchList(movieObj))} className='m-4 flex justify-center items-center rounded bg-gray-900/60 h-8 text-xs text-white px-2 py-2 border'>
          <button>Add to Watchlist</button>
        </div>

      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/45'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
import React, { useState } from 'react'

function WatchList({watchList}) {

  const[search, setSearch] = useState('')

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold flex justify-center items-center mx-4'>Action</div>
      <div className='bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold flex justify-center items-center mx-4'>Action</div>
    </div>
      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" className='h-[3rem] w-[18-rem] bg-gray-200 outline-none px-4 ' placeholder='Search for movies...' />
      </div>

      <div className=' overflow-hidden rounded-lg border border-gray my-4'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
</thead>

            <tbody>

              {watchList.filter((movieObj)=>{
                return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
              }).map((movieObj)=>{
                return <tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[6rem] w-[5rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                  <div className='mx-10'>{movieObj.title}</div>
                </td>
                <td>
                  {movieObj.vote_average}
                </td>
                <td>
                  {movieObj.popularity}
                </td>
                <td>Drama</td>
                <td className='text-red-600'>Delete</td>
              </tr>
              })}

              
            </tbody>
          
        </table>
      </div>
    </>

  )
}

export default WatchList
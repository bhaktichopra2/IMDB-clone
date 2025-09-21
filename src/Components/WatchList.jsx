import React, { useEffect, useState } from 'react'
import genreids from '../Utility/genre'

function WatchList({ watchList, setWatchList }) {

  const [search, setSearch] = useState('')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let sortInc = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedInc])
  }

  let sortDec = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDec])
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
              <th className='flex'>
                <div onClick={sortInc} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDec} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchList.filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
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
                <td>{genreids[movieObj.genre_ids[0]]}</td>
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
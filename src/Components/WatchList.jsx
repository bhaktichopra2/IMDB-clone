import React, { useEffect, useState } from 'react'
import genreids from '../Utility/genre'

function WatchList({ watchList, setWatchList, handleRmWatchList }) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genre'])
  const [currGenre, setCurrGenre] = useState('All Genre')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let handleFilter = (genre) => {
    setCurrGenre(genre)
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

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  }, [watchList])

  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre) => {
          return <div onClick={() => handleFilter(genre)} className={currGenre == genre ? 'bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold flex justify-center items-center mx-4' :
            'bg-gray-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold flex justify-center items-center mx-4'}>{genre}</div>
        })}

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
              if (currGenre == 'All Genres') {
                return true
              } else {
                return genreids[movieObj.genre_ids[0]] == currGenre
              }
            })
              .filter((movieObj) => {
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
                  <td onClick={() => handleRmWatchList(movieObj)} className='text-red-600'>Delete</td>
                </tr>
              })}
          </tbody>

        </table>
      </div>
    </>

  )
}

export default WatchList
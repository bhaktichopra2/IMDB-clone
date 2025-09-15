import React from 'react'

function WatchList() {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold flex justify-center items-center'>Action</div>
    </div>
      <div className='flex justify-center my-4'>
        <input type="text" className='h-[3rem] w-[18-rem] bg-gray-200 outline-none px-4 ' placeholder='Search for movies...' />
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
              <tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[6rem] w-[5rem]' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lade51n35Gg_5nTbCxjncMjj6e0cQ8ofAA&s"} />
                  <div className='mx-10'>Name of movie</div>
                </td>
                <td>
                  8.5
                </td>
                <td>
                  9
                </td>
                <td>Drama</td>
                <td className='text-red-600'>Delete</td>
              </tr>
            </tbody>
          
        </table>
      </div>
    </>

  )
}

export default WatchList
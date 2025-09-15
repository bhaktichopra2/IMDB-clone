import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[85vh] bg-cover bg-center flex items-end'  style={{backgroundImage: 'url(https://images.justwatch.com/backdrop/322009198/s640/the-conjuring-last-rites)'}}>
        <div className='text-white text-4xl bg-gray-900/60 w-full text-center p-6 font-bold' >
            Conjuring: Last Rites
        </div>
        
    </div>
  )
}

export default Banner
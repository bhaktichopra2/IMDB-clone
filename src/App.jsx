import { useEffect, useState } from 'react';
import './App.css'
import Banner from './Components/Banner';
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'
import WatchList from './Components/WatchList'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let [watchList, setWatchList] = useState([])

  let handleAddWatchList = (movieObj)=>{
    let newWatchList = [...watchList, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRmWatchList = (movieObj)=>{
    let filteredWatchList = watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
  }

  useEffect(()=>{
    let movieLocal = localStorage.getItem('moviesApp')
    if(!movieLocal){
      return
    }
    setWatchList(JSON.parse(movieLocal))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<> <Banner /> <Movies watchList={watchList} handleAddWatchList={handleAddWatchList} handleRmWatchList={handleRmWatchList} /> </>} />
          <Route path='/watchList' element={<WatchList watchList={watchList} setWatchList={setWatchList} />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

// https://api.themoviedb.org/3/movie/popular?api_key=d6a3a28c2e54127e97a916bebaadf444&language=en-US&page=1
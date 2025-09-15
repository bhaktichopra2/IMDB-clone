import './App.css'
import Banner from './Components/Banner';
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'
import WatchList from './Components/WatchList'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<> <Banner /> <Movies /> </>} />
          <Route path='/watchList' element={<WatchList />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

// https://api.themoviedb.org/3/movie/popular?api_key=d6a3a28c2e54127e97a916bebaadf444&language=en-US&page=1
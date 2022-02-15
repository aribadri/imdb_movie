import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';


function App() {
  const [inputText, setInputText] = useState('')
  const [movies, setMovies] = useState([])


async function fetching () {
  setInputText('')
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {s: `${inputText}`, r: 'json', page: '1'},
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': '31acaf6943msh9955531d4f63752p106540jsn26058a336491'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setMovies(response.data.Search)
  }).catch(function (error) {
    console.error(error);
  });

}
  return (
      //  <div className="container">
      // <div className="maintext">Unlimited movies, TV shows, and more.</div>
      // <div className="secondtext">Watch anywhere. Cancel anytime.</div>
      // <div>
    <Routes>
      <Route path="/" element={<MainPage movies={movies} inputText={inputText} setInputText={setInputText} setInputText={setInputText} fetching={fetching} />} />
      <Route path="/movie/:id/:param" element={<MoviePage />} />
    </Routes>
    //   </div>
    // </div>
  );
}

export default App;

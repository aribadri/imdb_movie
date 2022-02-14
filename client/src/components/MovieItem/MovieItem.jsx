import React from 'react'
import '../../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MovieItem({movie}) {
  const [film, setFilm] = useState({})
  const navigate = useNavigate()
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {r: 'json', i: `${movie.imdbID}` },
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': '31acaf6943msh9955531d4f63752p106540jsn26058a336491'
    }
  };

  useEffect(() => {
      axios.request(options).then(function (response) {
        console.log(response.data);
        setFilm(response.data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  
  
  return (
    <div className="movieItemContainer"
    onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <div className="imageItem">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="textItem">
        <span className="filmTitle">{film.Title}</span>
        <p className="filmType">{film.Type} | {film.Genre} | {film.Year} </p>
       {/* <p>{film.Plot}</p> */}

      </div>
      <div className="raitingContainer">
        <div>raiting</div>

      </div>

    </div>
  )
}


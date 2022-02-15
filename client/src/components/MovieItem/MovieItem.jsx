import React from 'react'
import '../../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MovieItem({ movie }) {
  const [film, setFilm] = useState({})
  const navigate = useNavigate()
  const options = {
    method: 'GET',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movie.imdbID}`,
    headers: {
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': 'd25b68bed7msh4a0056f055c95dbp1674bajsndc13b22af378'
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
      onClick={() => navigate(`/movie/${film.id}/${film.trailer.id ? film.trailer.id : 'vi2997093657'}`)}
    >
      <div className="imageItem">
        <img className="poster" src={film.poster} alt={film.title} />
      </div>
      <div className="textItem">
        <span className="filmTitle">{film.title}</span>
        <div className="film-about">
          <div className="film-type">{movie.Type}</div>
          <div className="separate">{"|"}</div>
          {/* <div>{film.Genre}</div> */}
          {/* <div>{"|"}</div> */}
          <div className="film-year">{film.year}</div>
        </div>
        {/* <p>{film.Plot}</p> */}

      </div>
      <div className="raitingContainer">
        <div className="db-movie">IMDb</div>
        <div className="raiting">{film.rating}</div>
      </div>
      <hr />
    </div>
  )


}

// return (
//   <div className="movieItemContainer"
//   onClick={() => navigate(`/movie/${film.id}/${film.trailer.id ? film.trailer.id : film.id}`)}
//   >
//     <div className="imageItem">
//       <img className="poster" src={film.poster} alt={film.title} />
//     </div>
//     <div className="textItem">
//       <span className="filmTitle">{film.title}</span>
//       <p className="filmType">{film.Type} | {film.Genre} | {film.year} </p>
//      <p>{film.plot}</p>

//     </div>
//     <div className="raitingContainer">
//       <div>raiting</div>

//     </div>

//   </div>
// )
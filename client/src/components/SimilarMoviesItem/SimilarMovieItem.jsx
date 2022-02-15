import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SimilarMovieItem({ movie }) {
  const navigate = useNavigate();
  const [film, setFilm] = useState([])
  const [film2, setFilm2] = useState([])

  console.log(movie);
  var options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { r: 'json', i: `${movie.imdb_id}` },
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': 'd25b68bed7msh4a0056f055c95dbp1674bajsndc13b22af378'
    }
  };
  const options2 = {
    method: 'GET',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movie.imdb_id}`,
    headers: {
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': 'd25b68bed7msh4a0056f055c95dbp1674bajsndc13b22af378'
    }
  };
  useEffect(() => {

    axios.request(options).then(function (response) {
      console.log(response.data);
      setFilm(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    axios.request(options2).then(function (response) {
      console.log(response.data);
      setFilm2(response.data)
    })

  }, []);


  return (
    <div
      className="img-item-compilation"
      style={{ background: `url(${film.Poster})` }}
      onClick={() => navigate(`/movie/${movie.imdb_id}/${film2.trailer.id ? film2.trailer.id : 'vi2997093657'}`)}>

    </div>
  )
}

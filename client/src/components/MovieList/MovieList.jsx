import React from 'react'
import MovieItem from '../MovieItem/MovieItem'

function MovieList({movies}) {
  return (
    <div className="movieListContainer">
      {movies ? movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} />) : 'no match'}
    </div>
  )
}

export default MovieList

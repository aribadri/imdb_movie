import React from 'react'
import SimilarMovieItem from '../SimilarMoviesItem/SimilarMovieItem'

export default function SimilarMovieList({movies}) {
  return (
    <div>
      {movies.map(movie => <SimilarMovieItem key={movie.imdb_id} movie={movie} />) }
    </div>
  )
}


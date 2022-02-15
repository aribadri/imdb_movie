import React from 'react'
import SimilarMovieItem from '../SimilarMoviesItem/SimilarMovieItem'

export default function SimilarMovieList({movies}) {
  return (
    <div className="wrap-compilation">
      {movies.map(movie => <SimilarMovieItem key={movie.imdb_id} movie={movie} />) }
    </div>
  )
}


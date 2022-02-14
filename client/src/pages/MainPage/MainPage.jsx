import React from 'react'
import MovieList from '../../components/MovieList/MovieList';
import Button from '../../components/Button/Button';
import InputForm from '../../components/Input/InputForm';

    export default function MainPage({movies, inputText, setInputText, fetching  }) {
  return (
    <div className="container">
    <div className="maintext">Unlimited movies, TV shows, and more.</div>
    <div className="secondtext">Watch anywhere. Cancel anytime.</div>
    <div>
    <InputForm inputText={inputText} setInputText={setInputText}/>
    <Button setInputText={setInputText} fetching={fetching}/>
    <MovieList movies={movies}/>
    </div>
  </div>
  )
}


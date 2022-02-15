import React from 'react'
import MovieList from '../../components/MovieList/MovieList';
import Button from '../../components/Button/Button';
import InputForm from '../../components/Input/InputForm';
import YoutubeBackground from 'react-youtube-background'


    export default function MainPage({movies, inputText, setInputText, fetching  }) {
  return (
    <div>
    <YoutubeBackground videoId='gA0nQyDZR4A' className='videoBack' style={{
      position: 'absolute', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden', 
      zIndex: 1,

      }}>

    <div className="container">
    <div className="maintext">Unlimited movies, TV shows, and more.</div>
    <div className="secondtext">Watch anywhere. Cancel anytime.</div>
    <div>
    <InputForm inputText={inputText} setInputText={setInputText}/>
    <Button setInputText={setInputText} fetching={fetching}/>
    <MovieList movies={movies}/>
    </div>
  </div>
  </YoutubeBackground>
  </div>

  )
}


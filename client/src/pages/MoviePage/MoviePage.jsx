import { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios'
import '../../App.css'
import MyModal from '../../components/MyModal/MyModal';
import SimilarMovieList from '../../components/SimilarMoviesList/SimilarMovieList';

function MoviePage() {
const [modal, setModal] = useState(false);
const { id } = useParams();
const [preview, setPreview] = useState('')
const [videoUrl, setVideoUrl] = useState('')
const [videoOptions, setVideoOptions] = useState({})
const [similarMovies, setSimilarMovies] = useState([])


const navigate = useNavigate()
useEffect(() => {
  const options = {
    method: 'GET',
    contentType: 'application/json',
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
    headers: {
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': 'd25b68bed7msh4a0056f055c95dbp1674bajsndc13b22af378'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
    setVideoOptions(response.data.trailer.id)
    setVideoUrl(response.data.trailer.link)
  
  }).catch(function (error) {
    console.error(error);
  });
}, []);






useEffect(() => {
  const optionsImageUrl = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-videos',
    params: {tconst: id, limit: '25', region: 'US'},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'd25b68bed7msh4a0056f055c95dbp1674bajsndc13b22af378'
    }
  };
  
  const optionsVideoUrl = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-video-playback',
    params: {viconst: `${videoOptions}`, region: 'US'},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'd25b68bed7msh4a0056f055c95dbp1674bajsndc13b22af378'
    }
  };
  const optionsSimilarMovies = {
    method: 'GET',
    url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    params: {type: 'get-similar-movies', imdb: id, page: '1'},
    headers: {
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
      'x-rapidapi-key': '31acaf6943msh9955531d4f63752p106540jsn26058a336491'
    }
  };
  
  axios.request(optionsImageUrl).then(function (response) {
    console.log(response.data.resource.videos[0].image.url);
    setPreview(response.data.resource.videos[0].image.url)
    
  }).catch(function (error) {
    console.error(error);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  axios.request(optionsVideoUrl).then(function (response) {
      console.log(response.data.resource.encodings[1].playUrl);
      // setVideoUrl(response.data.resource.encodings[0].playUrl)
    }).catch(function (error) {
      console.error(error);
    });

  axios.request(optionsSimilarMovies).then(function (response) {
      console.log(response.data);
      setSimilarMovies(response.data.movie_results)
    }).catch(function (error) {
      console.error(error);
    });
}, []);

function openModal (){
  setModal(true) 
  // setVideoUrl(videoOptions.resource.encodings[1].playUrl)
  console.log(videoOptions);
}

  return (
    <div className="moviePageContainer">
    <div className="header" onClick={openModal}>
      <h1 onClick={() => navigate('/')}>Richbee Shows</h1>
      <input />
      </div>
    <div className="posterBackground" style={{background: `linear-gradient(90.3deg, #111111 19%, rgba(17, 17, 17, 0) 99.75%), url(${preview}) no-repeat`}}></div>
    <div></div>
    <div></div>
    <SimilarMovieList  movies={similarMovies}/>
    <MyModal visible={modal} setModal={setModal} setVideoUrl={setVideoUrl}>
      <video src={`${videoUrl}`} autoPlay={false} controls width="100%" height="auto"/>
    </MyModal>
'
    </div>
    

  )
}

export default MoviePage

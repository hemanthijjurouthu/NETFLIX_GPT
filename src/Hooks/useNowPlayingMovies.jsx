import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import {useEffect} from 'react'
import { useSelector } from 'react-redux';

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;


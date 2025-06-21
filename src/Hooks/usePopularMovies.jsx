import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import {useEffect} from 'react'
import { useSelector } from 'react-redux';

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);
      console.log(json);
      console.log(json);
      console.log(json);
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(() => {
      !popularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies;
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import {useEffect} from 'react'
import { useSelector } from 'react-redux';

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);
      dispatch(addTopRatedMovies(json.results));
    }
  
    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;
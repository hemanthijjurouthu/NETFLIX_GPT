import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import {useEffect} from 'react'
import { useSelector } from 'react-redux';

const useUpComingMovies = () => {
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect(() => {
      !upcomingMovies && getUpComingMovies();
    },[]);
}

export default useUpComingMovies;
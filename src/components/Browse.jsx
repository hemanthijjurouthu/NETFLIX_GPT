import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpComingMovies from '../Hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const searchView = useSelector((store) => store.gpt.toggleGPT);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className="bg-black">
      <Header />
      {searchView ? <GPTSearch/> : <><MainContainer />
      <SecondaryContainer /></>}
    </div>
  )
}

export default Browse;

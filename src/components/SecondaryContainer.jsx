import React from 'react'
import {useSelector} from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const moviesList1 = useSelector((store) => store.movies?.nowPlayingMovies);
  const movieList2 = useSelector((store) => store.movies?.popularMovies);
  const movieList3 = useSelector((store) => store.movies?.topRatedMovies);
  const movieList4 = useSelector((store) => store.movies?.upComingMovies);
  return (
  <div className="bg-black">
    <div className="-mt-40 pl-12 relative z-20">
      <MovieList movies={moviesList1} title="Now Playing"/>
      <MovieList movies={movieList2} title="Popular"/>
      <MovieList movies={movieList3} title="Top Rated Movies"/>
      <MovieList movies={movieList4} title="UpComing Movies"/>
    </div>
  </div>
  )
}

export default SecondaryContainer
import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies,title}) => {
  console.log(movies);
  console.log(title);
  if(!movies) return;
  console.log(movies);
  console.log(movies[0]);
  return (
  <div className="bg-black">
    <h1 className="font-bold text-2xl px-3 py-3 text-white">{title}</h1>
    <div className="flex overflow-x-scroll hide-scrollbar">
      <div className="flex">
        { movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>) }
      </div>
    </div>
  </div>
  )
}

export default MovieList
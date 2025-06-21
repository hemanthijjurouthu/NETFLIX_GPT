import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieSuggestions = () => {
   const gpt = useSelector((store) => store.gpt);
   const { MovieNames , movieResults } = gpt;
  if(!MovieNames) return null;
  if(!movieResults) return null;
  console.log(MovieNames[0]);
  console.log(movieResults[0]);
  return (
    <div className="bg-black opacity-80 text-white absolute md:top-[33%] sm:top-[42%] w-screen">
      {MovieNames.map((movieName, index) => (
        <MovieList 
          key={movieName}
          movies={movieResults[index]} 
          title={movieName} 
        />
      ))}
    </div>
  )
}

export default MovieSuggestions
import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({movie}) => {
  if(!movie) return;
  console.log(movie);
  const {backdrop_path} = movie;
  if(!backdrop_path) return null;
  return (
    <div className="w-60 pr-5">
        <img alt="poster" src={IMG_CDN_URL + backdrop_path}/>
    </div>
  )
}

export default MovieCard
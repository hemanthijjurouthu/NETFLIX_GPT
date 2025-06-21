import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import {addTrailerVideo} from '../utils/movieSlice';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailer);
  const dispatch = useDispatch();
      const getVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
        const json = await data.json ();
        console.log(json.results);
    
        const filteredData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      }
      useEffect(() => {
        getVideos();
      },[]);

  return (
    <div className="w-screen">
    <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=0&showinfo=0&mute=1&loop=1&modestbranding=1&rel=0&disablekb=1&enablejsapi=0&iv_load_policy=3&playlist=${trailerVideo?.key}&start=30`}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
</div>
  )
}

export default VideoBackground
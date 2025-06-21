import React,{useRef} from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import model from '../utils/openai'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import {addGPTMovieResults} from '../utils/gptSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleClick = async () => {

    console.log(searchText.current.value);

    //make an api call to GPT API and get the results

    const gptQuery = "Act as a movie recommendation system suggest me some movies for the query :" + searchText.current.value + "only give me names of 5 movies , comma seperated like the example result given ahead,Example result : pokiri,trinetram,amaran,tandel,lucky bhaskar";

    const result = await model.generateContent([gptQuery]);
    console.log(result.response.text().split(","));

    const movies = result.response.text().split(",");
    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
    //console.log(promiseArray);
    const topResults = await Promise.all(promiseArray);
    //console.log(topResults)
    dispatch(addGPTMovieResults({movieNames : movies,movieResults : topResults}));
  }

  return (
    <div className="absolute bg-black md:mt-[10%] sm:ml-8 md:ml-80 rounded-lg sm:mt-[30%]">
        <form className="grid grid-cols-12 m-2" onSubmit = {(e) => {
          e.preventDefault();
        }}>
            <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-2 my-2 col-span-10 border border-white text-white rounded-lg"/>
            <button className="text-white p-2 ml-1 mt-2 bg-red-500 rounded-lg w-24 h-11 col-span-2" onClick={handleClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default SearchBar
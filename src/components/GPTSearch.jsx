import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './movieSuggestions'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
          <img src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" alt="bg-image" className="sm:h-screen object-cover md:w-screen fixed"/>
        </div>
        <SearchBar/>
        <MovieSuggestions/>
    </div>
  )
}

export default GPTSearch
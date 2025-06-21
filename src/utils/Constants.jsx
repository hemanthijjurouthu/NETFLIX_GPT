export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const SUPPORTED_LANGUAGES = [{identifier : "en",name : "English"},
  {identifier : "Hi",name : "Hindi"},
  {identifier : "Tel",name : "Telugu"},
  {identifier : "spanish",name : "spanish"}
];


export const GEMINI_AI_KEY = process.env.REACT_APP_GEMINI_KEY;

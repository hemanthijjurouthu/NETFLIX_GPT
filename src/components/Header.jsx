import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/Constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const toggleGPT = useSelector((store) => store.gpt.toggleGPT);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(toggleGPTSearchView());
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            console.log(uid,email,displayName);
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/");
          }
        }); 
    //it gets removed from the browser whenever component unmounts
    
    return () => unsubscribe();   
  },[]);

  const user = useSelector((store) => store.user);

  console.log("User object from Redux:", user);
  console.log("User Photo URL:", user?.photoURL);

  const signOutHandler = () => {
    signOut(auth).then(() => {})
    .catch(() => {
      navigate("/error");
    });
  };

  return (<div className="absolute px-8 py-2 w-screen bg-opacity-50 z-10 flex justify-between bg-gradient-to-l from-black sm:flex-col md:flex-row">
        <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="logo" className="w-44 md:mx-0 sm:mx-auto"/>
        <div className="flex">
          {user && (
            <>

            {toggleGPT && (<select className="bg-white w-24 h-10 mt-8 mr-2 rounded-lg p-0.5" onChange={handleChange}>
            {
              SUPPORTED_LANGUAGES.map((lang) => <option value={lang.identifier}>{lang.name}</option>)
            }
            </select>)}

            <button className="text-white bg-orange-700 px-2 my-2 w-30 h-10 mt-8 mr-2 rounded-lg font-semibold" onClick={handleClick}>{!toggleGPT ? "GPT Search" : "Home Page"}</button>
            <img alt="user" src={user.photoURL} className="w-10 h-10 mt-8 rounded-full"/>
            <button className="font-bold text-white px-1 mt-8 w-25 h-10 rounded-lg bg-amber-300 ml-2" onClick={signOutHandler}>(Sign Out)</button>
            </>
          )}
        </div>
    </div>
  )
}

export default Header


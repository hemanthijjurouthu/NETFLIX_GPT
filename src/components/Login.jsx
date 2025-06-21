import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "./validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState("");

    const toggleForm = () => {
      setIsSignInForm(!isSignInForm);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email.current.value);
        console.log("Password:", password.current.value);
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message !== null)
        {
          return;
        }

            if(!isSignInForm) {
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
             .then((userCredential) => {
              const user = userCredential.user;

              updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://cdn-icons-png.flaticon.com/512/9187/9187532.png",
              })

              .then(() => {
              //console.log("Updated User:", auth.currentUser.displayName, auth.currentUser.photoURL);
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({
                uid : uid,
                email : email,
                displayName : displayName,
                photoURL : photoURL}));
              })
              .catch((error) => {
              setErrorMessage(error.message);
              });
            })

            .catch((error) => {
              setErrorMessage(error.code + " - " + error.message);
            });
          }

          else {
              //signin logic
              signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              // ...
              })
              .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
              });
            }
    };
    
  
    return (
      <div>
        <Header />
        <div className="absolute">
          <img src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" alt="bg-image"/>
        </div>

        <form className="bg-black text-white w-[24rem] absolute mt-24 mx-auto left-0 right-0 p-12 opacity-70 rounded-lg" onSubmit={handleFormSubmit}>
          <h1 className="p-8 font-bold text-center text-2xl"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
  
          {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-2 mb-6 w-full border rounded-lg border-white"/>)}
  
          <input ref={email} type="text" placeholder="Email Address" className="p-2 mb-6 w-full border rounded-lg border-white" />
  
          <input ref={password} type="password" placeholder="Password" className="p-2 mb-2 w-full border border-white rounded-lg" />

          <p className="py-2 m-2 font-bold text-red-500">{errorMessage}</p>

          <button type="submit" className="p-2 mb-8 w-full bg-red-600 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

          <p className="text-white font-bold p-2 cursor-pointer" onClick={toggleForm}>{isSignInForm ? "New user? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
      </div>
    )
  }
  
  export default Login;
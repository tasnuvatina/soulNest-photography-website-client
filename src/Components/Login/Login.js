import React, { useContext, useState } from "react";
//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { Container } from "react-bootstrap";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css'
import googleIcon from '../../images/Group 573.png'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  let {
    loggedInUser,
    setLoggedInUser,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useContext(userContext);
  const [error, setError] = useState("");

  let handleGoogleSignIn = () => {
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        const { displayName, email } = user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        setIsUserLoggedIn(true);
        history.replace(from);
        setError("");
        storeToken();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        setError(errorMessage);
      });
  };
  
  const storeToken=()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token',idToken)
    }).catch(function(error) {
      console.log(error);
    });
  }

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ maxWidth: "400px" }} className='login-form'>
        <h2 className='mb-4'>Login with</h2>
          <button className='login-btn' onClick={handleGoogleSignIn}><img className='googleIcon' src={googleIcon} alt=""/> Sign in with google</button>
        </div>
      </Container>
    </div>
  );
};

export default Login;

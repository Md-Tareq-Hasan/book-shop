import React, { useContext, useState } from 'react';
import "./Login.css"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userCreate } from '../../App';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userCreate);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        password: '',
        photo: '',
        email: '',
        success: false
    })
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const userInfo = {
                    isSignedIn: true,
                    name: displayName,
                    password: '',
                    photo: '',
                    email: email,
                    success: true
                }
                setUser(userInfo);
                setLoggedInUser(userInfo);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                alert(errorMessage);
            });
    }

    return (
        <div className="form-container" className="form-border">

            <button onClick={handleSignIn} className="google-sign"><img src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" alt="" /> Sign in with google</button>
        </div>
    );
};

export default Login;
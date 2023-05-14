import { useState, useEffect, useContext } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
import "../AuthButton/AuthButton.css";

const GoogleAuth = () => {
    const [jwt, setJwt] = useState(localStorage.getItem("token") || null);
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Token" + response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);

        localStorage.setItem("token", response.credential);
        localStorage.setItem("name", JSON.stringify(userObject.name));
        localStorage.setItem("email_verified", JSON.stringify(userObject.email_verified));

        setJwt(response.credential);
        setIsAuthenticated(true);
        navigate('/home');
    }

    function initGoogleOneTap() {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        });
    }

    useEffect(() => {
        if (window.google && window.google.accounts) {
            initGoogleOneTap();
        } else {
            window.addEventListener("google-loaded", initGoogleOneTap);
        }

        return () => {
            window.removeEventListener("google-loaded", initGoogleOneTap);
        };
    }, []);

    useEffect(() => {
        if (!jwt) {
            initGoogleOneTap();
        }
    }, [jwt]);

    return <div id="signInDiv" className='loginGoogle'></div>;
};

export default GoogleAuth;
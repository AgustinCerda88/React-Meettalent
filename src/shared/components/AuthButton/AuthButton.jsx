import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import { AuthContext } from '../AuthProvider/AuthProvider';
import "./AuthButton.css";


export default function AuthButton() {
  const { jwt, setJwt } = useContext(JwtContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setJwt(token);
    }
  }, []); 

  const userJSON = localStorage.getItem("name");
  const user = userJSON ? JSON.parse(userJSON) : null;
  
  const signOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('email_verified');
      localStorage.clear();
      setJwt(null);
      setIsAuthenticated(false);
      navigate("/login");
  }



return jwt ? (<p> Welcome! {user} <button onClick={signOut}>Sign out</button></p>) : (<p>You are not logged in.</p>);
}

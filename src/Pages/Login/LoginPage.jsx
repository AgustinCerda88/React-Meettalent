import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import group7 from "../../assets/group7.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import { JwtContext } from "../../shared/contexts/JwtContext";
import { AuthContext } from "../../shared/components/AuthProvider/AuthProvider";
import GoogleAuth from "../../shared/components/GoogleAuth/GoogleAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("isAuthenticated = " + isAuthenticated);
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (formData) => {
    API.post("user/login", formData)
      .then((res) => {
        console.log(
          "Login with response:",
          res.data,
          "Full AxiosResponse:",
          res
        );
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", JSON.stringify(res.data.userInfo.name));
        localStorage.setItem(
          "email_verified",
          JSON.stringify(res.data.userInfo.email_verified)
        );
        setIsAuthenticated(true);
        setJwt(true);
        navigate("/home");
      })
      .catch((error) => {
        console.log("Error logging in:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginContainer">
      <div className="loginImages">
        <img src={group7} alt="group7"></img>
      </div>
      <div className="loginInputs">
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="loginImput">
            <label className="loginLabel" htmlFor="email">
              Email ID
            </label>
            <div className="input-wrapper">
              <input
                className="button-blue button100"
                type="email"
                id="email"
                placeholder="Email ID"
                {...register("email")}
              />
            </div>
          </div>
          <div className="loginInput">
            <label className="loginLabel" htmlFor="password">
              Contraseña
            </label>
            <div className="input-wrapper">
              <input
                className="button-blue button100"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Contraseña"
                {...register("password")}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <div>
            <button className="button-white button100" type="submit">
              Comenzar
            </button>
          </div>
        </form>
      </div>
      <div className="loginError">
        <p className="loginErrorP">No puedes iniciar sesión?</p>
        <Link to={"/RestablecerContrasenaEmail"} className="loginErrorLink">
          Restablecer la contraseña
        </Link>
      </div>
      <div className="loginLine"></div>
      <div className="loginNew">
        <Link to={"/register"} className="loginWhite">
          <h3>Crear nueva cuenta</h3>
        </Link>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default LoginPage;

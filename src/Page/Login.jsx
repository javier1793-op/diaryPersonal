import { Link, Navigate } from "react-router-dom";
import "../Css/login.scss";

import {  useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState('');
  const [validated, setValidated] = useState(false)
  const [logout, setLogout] = useState(false)

  const urlApi = "https://serverkoppodiary.onrender.com/api/user/login";

  useEffect(() => {
   let valor = ''
    valor = localStorage.getItem("token")
   
    if(valor != null){
     setLogout(true)
    }
  }, [])
  
  const handleClose=()=>{
  
  localStorage.removeItem("token")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username1 = e.target.username.value;
    const password1 = e.target.password.value;

    if (username1 == "" || password1 == "") {
     setMessage('Complete the fields')
      return setTimeout(() => setMessage(''), 5000);
      
    }

    axios
      .post(urlApi, {
        username: username1,
        password: password1,
      })
      .then(function (response) {
        setToken(response.data.success)
      })
      .catch(function (error) {
       setMessage(error.response.data.error)
       console.log(message)
       return setTimeout(() => setMessage(''), 5000);
      });

      localStorage.setItem('token',token)
      if(token != ''){
        setValidated(true)
      }
  };


  return (
    <>
      {validated && <Navigate to='/diaryPersonal/'/>}
      {logout?
        <div className="containerLoginclose">
         
          <span className="logout"
          onClick={handleClose}
          >
          Logout
          </span>
          <Link to="/diaryPersonal/">
        <button className="backLogin">Back</button>
      </Link>
        </div>
      :
      <div className="containerLogin">
      <div className={`alert-box ${message != "" ? "active" : ""}`}>
        <p className="alert">{message}</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading">login</h1>
        <input
          type="text"
          placeholder="email"
          className="email"
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          className="password"
          name="password"
        />

        <button className="submit-btn">log in</button>
      </form>
      <Link to="/diaryPersonal/">
        <button className="backLogin">Back</button>
      </Link>
    </div>
      }
     
    </>
  );
};

export default Login;

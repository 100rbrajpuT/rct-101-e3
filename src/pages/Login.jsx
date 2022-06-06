import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [loginCred, setLoginCred] = useState({});
  const {login} = useContext(AuthContext)

  const handleChange =(e)=>{
      const {name, value} = e.target;
      setLoginCred({
        ...loginCred,[name]: value
      })
  }

 const handleSubmit = (e)=>{
   e.preventDefault();
   login();
 }


  return (
    <div>
    <h3>Login</h3>
    <form onSubmit={handleSubmit}>
      <input data-cy="login-email" type="email" placeholder="Enter Email" onChange={handleChange}/>
      <input data-cy="login-password" type="password" placeholder="Enter Password" onChange={handleChange}/>
      <button data-cy="login-submit" type="submit">Submit</button>
    </form>
      
    </div>
  );
};

export default Login;

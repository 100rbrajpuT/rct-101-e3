import React, { useContext, useState } from "react";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth, logout }=useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin=()=>{
    console.log("clicked")
    if(isAuth){
      logout();
    }
    else{
      navigate("/login")
    }
  }

  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link" element={<Home/>}> Product </Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button" >{isAuth ?"Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 w-100">

      <Link className="navbar-brand fs-4" to="/netflixhome">
        Netflix
      </Link>

      <ul className="navbar-nav flex-row ms-auto">

        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixhome">Home</Link>
        </li>

        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixshows">Shows</Link>
        </li> */}

        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixmovies">Movies</Link>
        </li> */}

        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixsong">Song</Link>
        </li> */}

        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixseries">Series</Link>
        </li> */}

        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/netflixtv">TV</Link>
        </li> */}

        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/team">Team</Link>
        </li> */}

        {/* { <li className="nav-item mx-3">
          { <Link className="nav-link text-white" to="/userstate1">UserState1</Link>}
         </li> } */}
        {/* <li className="nav-item mx-3"> 
           <Link className="nav-link text-white" to="/userstate2">UserState2</Link> 
        </li> */}

         {/* <li className="nav-item mx-3"> 
         <Link className="nav-link text-white" to="/userstate3">UserState3</Link> 
         </li>  */}
          <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/fuctionDemo1">FunctionDemo1</Link>
        </li>
         {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/employee">employee</Link>
        </li>
         */}
        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/student1">student1</Link>
        </li> */}
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/inputdemo1">inputdemo1</Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/inputdemo2">inputdemo2</Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo1">formdemo1</Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo2">formdemo2</Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo3">formdemo3</Link>
        </li>
        {/* <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo4">formdemo4</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo5">formdemo5</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo6">formdemo6</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo7">formdemo7</Link>
        </li> */}
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/formdemo8">Formdemo8</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/apidemo1">apidemo1</Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/apidemo2">apidemo2</Link>
        </li>
      </ul>
    </nav>
  );
};

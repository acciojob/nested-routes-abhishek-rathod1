import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Gromming from "./Gromming";
import Women from "./Women";

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link> <br /></li>
        <li><Link to={"/women"}>Women</Link></li>
      </ul>
      
      
    </div>
  );
};

export default Home;

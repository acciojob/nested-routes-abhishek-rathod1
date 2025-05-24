
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { NoPage } from "./NoPage";
import Home from "./Home";
import Women from "./Women";
import Gromming from "./Gromming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const App = () => {
  return (
    <div>
      <BrowserRouter>        
        
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/women'}>Women</Link> */}
        <br/>
        
        <Routes>
          <Route path="/*" element={<Home/>}></Route>
          <Route path='/women/*' element={<Women/>}></Route>
          <Route path='/women/gromming/*' element={<Gromming/>}></Route>
          <Route path='/women/shirt/*' element={<Shirt/>}></Route>
          <Route path='/women/trouser/*' element={<Trouser/>}></Route>
          <Route path='/women/jewellery/*' element={<Jewellery/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
          
          
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Gromming from './Gromming'
import Home from './Home'

const Women = () => {
  return (
    <div>
      
      <div>Women Items:</div>
      <ul>
        <li><Link to={"/women/gromming"}>Gromming</Link></li>
        <li><Link to={"/women/shirt"}>Shirt</Link></li>
        <li><Link to={"/women/trouser"}>Trouser</Link></li>
        <li><Link to={"/women/jewellery"}>Jewellery</Link></li>
      </ul>
      <Outlet/>
      
    </div>
  )
}

export default Women
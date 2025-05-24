import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Gromming from './Gromming'
import Women from './Women'

const Home = () => {
  return (
    <div>
      <Link to={'/women'}>Women</Link>

      <Routes>
        
      </Routes>
    </div>
  )
}

export default Home
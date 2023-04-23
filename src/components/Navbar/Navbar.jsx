import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const { characterSelected } = useSelector((state) => state.characters);

  return (
    <div className='navbar'>
        <Link className='navbar-link' to="/">Characters</Link>
        <Link className='navbar-link' to="/planets">Planets</Link>
        {characterSelected && <img className='perfil' src={characterSelected.image}/> }
    </div>
  )
}

export default Navbar
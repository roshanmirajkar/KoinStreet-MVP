import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
      <li><NavLink to='/cryptoNews'>News</NavLink></li>
        <li><NavLink to='/market'>Markets</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
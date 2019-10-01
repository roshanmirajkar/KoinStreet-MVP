import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import './SignedInLinks.css';

//displays inital of user logged in in nav bar
// /<li className="profile"><NavLink to='/' className="btn btn-floating blue lighten-1">
//{props.profile.initials}
//</NavLink></li>

const SignedInLinks = (props) => {
  return (
    <div >
      <ul className="right">
        <li><NavLink to='/cryptoNews'>News</NavLink></li>
        <li><NavLink to='/market'>Markets</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

/*
 <li><NavLink to='/create'>New Post</NavLink></li>

  <li><NavLink to='/settings'>Settings</NavLink></li>

 */

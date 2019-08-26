import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import './SignedInLinks.css';

const SignedInLinks = (props) => {
  return (
    <div >
      <ul className="right">
        <li><NavLink to='/news'>News</NavLink></li>
        <li><NavLink to='/market'>Markets</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolios</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li className="profile"><NavLink to='/' className="btn btn-floating blue lighten-1">
          {props.profile.initials}
        </NavLink></li>

      </ul>
    </div>
  )
}




/*



{
  "rules": {
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
  }
}

*/



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

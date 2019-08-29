import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import './Navbar.css';
import Img from '../Images/untitled.svg'


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;


  return (
    <nav className="nav-wrapper" >
      <div className="container">
      <div className= "logo">


        <Link to='/' className="brand-logo"><img src={Img} height='50px'  /></Link>

        </div>

        <div className="links">
          {links}
        </div>

      </div>
    </nav>
  )
}


const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)

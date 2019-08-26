import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import './Navbar.css';
import Img from '../Images/Logo.png'


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper  grey darken-4 ">
      <div className="container">
      <div className= "logo">
      

        <Link to='/' className="brand-logo"><img src={Img} height='25px' /></Link>
        </div>
    
        <div  >
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

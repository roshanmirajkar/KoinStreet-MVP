import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from "axios"


class Settings extends Component {
  state = {
    web: '',
    secretKey: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

console.log('Coinbase backog' + e.target.value);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    //this.props.createPost(this.state);
    //this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onClick={popup()}>
          <div className="input-field">
            <button className="btn blue lighten-1">Save Changes</button>
          </div>
        </form>
      </div>
    )
  }
}

function popup(){

    //cancel the order
axios.get('https://www.coinbase.com/oauth/authorize?client_id=d5a24b7ece44c038cad39e166e91b95ed827a6c1f3d202dd6b115b4f908d9ba7&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=wallet%3Auser%3Aread')
    .then(response => console.log(response))
  //  const web = 'https://www.coinbase.com/oauth/authorize?client_id=d5a24b7ece44c038cad39e166e91b95ed827a6c1f3d202dd6b115b4f908d9ba7&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=wallet%3Auser%3Aread'
//    const popup = window.open(web);


    };


function token() {
  const popup = window.open('https://api.coinbase.com/oauth/token')
};


//curl https://api.coinbase.com/oauth/token \
  //-X POST
  //-d 'grant_type=authorization_code&code=4c666b5c0c0d9d3140f2e0776cbe245f3143011d82b7a2c2a590cc7e20b79ae8&client_id=1532c63424622b6e9c4654e7f97ed40194a1547e114ca1c682f44283f39dfa49&client_secret=3a21f08c585df35c14c0c43b832640b29a3a3a18e5c54d5401f08c87c8be0b20&redirect_uri=https://example.com/oauth/callback'
//After a successful request, a valid access token will be returned in the response:





//ClientID = d5a24b7ece44c038cad39e166e91b95ed827a6c1f3d202dd6b115b4f908d9ba7
//SecretID = 40b1ef90718ee32326f4e6cde06d9d4ae4c1ca8b3a380d82b8e0e80bc353f52e


//console.log(window.location.pathname);




const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
   // createPost: (post) => dispatch(createPost(post))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Settings)

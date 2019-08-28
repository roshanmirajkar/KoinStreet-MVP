import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import './CreatePost.css';


class CreatePost extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="Postbox">
        <form className="textbox blue-grey darken-4" onSubmit={this.handleSubmit}>
          <h5 className="white-text">Create a New Post</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} className="white-text"/>
            <label htmlFor="title" className="white-text">Post Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea white-text" onChange={this.handleChange} ></textarea>
            <label htmlFor="content" className="white-text">Post Content</label>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));

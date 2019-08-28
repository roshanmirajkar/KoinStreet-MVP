import React, { Component } from 'react'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import CreatePost from '../posts/CreatePost';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const { posts, auth, /*notifications*/ } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard">
        <div className="row">
          <div className="column">
            <CreatePost /> 
          </div>
          <div className="posts">
          <PostList posts={posts} />
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc']},
    { collection: 'notification', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Dashboard)

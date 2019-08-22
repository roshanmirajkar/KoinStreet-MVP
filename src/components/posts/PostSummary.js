import React from 'react'
import moment from 'moment'
import './PostSummary.css';

const PostSummary = ({post}) => {
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{post.title}</span>
        <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
        <p className="grey-text">{moment(post.createdAt.time).calendar()}</p>
      </div>
    </div>
  )
}

export default PostSummary
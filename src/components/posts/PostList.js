import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import './PostList.css';


const PostList = ({posts}) => {
  return (
    
    <div className="post-list">
  
      { posts && posts.map(post => {
        return (
          <Link to={'/posts/' + post.id} key={post.id}>
            <PostSummary post={post} />
          </Link>
        )
      })}  
    </div>
  )
}

export default PostList

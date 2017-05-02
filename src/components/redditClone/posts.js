import React from 'react'

export default props => {
  return (
    <div>
      <p>Upvotes: {props.post.upVotes}</p>
      <a href={props.post.postLink}>
        <p>{props.post.postTitle}</p>
      </a>
    </div>
  )
}

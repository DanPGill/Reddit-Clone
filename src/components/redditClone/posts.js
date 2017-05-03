import React from 'react'

export default props => {
  return (
    <div>
      <a href={props.post.link}>
        <p>{props.post.title}</p>
      </a>
      <p>Upvotes: {props.post.upvotes}</p>
    </div>
  )
}

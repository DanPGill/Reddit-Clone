import React from 'react'

export default props => {
  return (
    <div>
      <p>Upvotes: {props.post.upvotes}</p>
      <a href={props.post.link}>
        <p>{props.post.title}</p>
      </a>
    </div>
  )
}

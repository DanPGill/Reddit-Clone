import React from 'react'
import f from 'styles/frontpage'

export default props => {
  return (
    <div className={f.posts}>
      <p className={f.upvotes}>Upvotes: {props.post.upvotes}</p>
      <a className={f.link} href={props.post.link}>
        <p>{props.post.title}</p>
      </a>
    </div>
  )
}

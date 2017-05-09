import React from 'react'
import styles from './styles'

export default props => {
  return (
    <div className={styles.posts}>
      <p className={styles.upvotes}>Upvotes: {props.post.upvotes}</p>
      <div className={styles.postContent}>
        <a className={styles.link} href={props.post.link}>
          <p>{props.post.title}</p>
        </a>
        <a href={`/posts/${props.post.postId}`}>Comments</a>
      </div>
    </div>
  )
}

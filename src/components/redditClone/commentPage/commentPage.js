import React from 'react'
import _ from 'lodash'
import Form from 'components/core/form'
import Post from 'components/redditClone/frontPage/post'
import styles from './styles'

export default props => {
  return (
    <div>
      <div>
        <Post post={props.currentPost} postId={props.postId} />
      </div>
      <div className={styles.commentPage}>
        <Form className={styles.addCommentForm} onSubmit={() => props.onAddComment()}>
          <label htmlFor="comment">
            Add a Comment:
          </label>
          <textarea className={styles.inputField} id="comment" onChange={e => props.onUpdateComment(e.target.value)} value={props.currentlyEditingComment} />
          <div className={styles.padding} />
          <button className={styles.addCommentButton}>Add Your Comment</button>
        </Form>
        <div className={styles.padding} />
        <p className={styles.heading}>Comments</p>
        <div>
          {_.map(props.currentPost.comments, comment => (
            <div>
              <div className={styles.comments}>
                <p className={styles.postedBy}>Posted by Anonymous:</p>
                <p className={styles.commentText}>{comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

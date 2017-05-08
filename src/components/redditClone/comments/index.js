import React from 'react'
import Form from 'components/core/form'
import Header from 'components/redditClone/frontPage/header'
import Comments from './comments'

export default props => {
  return (
    <div>
      <Header />
      <Comments post={props.post} currentPost={props.post.currentPostId} />
      <Form onSubmit={() => props.onAddComment()}>
        <label htmlFor="comment">
          Add a Comment:
        </label>
        <input id="comment" onChange={e => props.onUpdateComment(e.target.value)} value={props.currentlyEditingComment} />
      </Form>
    </div>
  )
}

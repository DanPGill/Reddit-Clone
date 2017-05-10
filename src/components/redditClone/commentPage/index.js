import React from 'react'
import Form from 'components/core/form'
import Header from 'components/redditClone/frontPage/header'
import CommentPage from './commentPage'

export default props => {
  return (
    <div>
      <Header />
      <CommentPage currentPost={props.currentPost} />
      <Form onSubmit={() => props.onAddComment()}>
        <label htmlFor="comment">
          Add a Comment:
        </label>
        <input id="comment" onChange={e => props.onUpdateComment(e.target.value)} value={props.currentlyEditingComment} />
      </Form>
    </div>
  )
}

import React from 'react'
import Header from 'components/redditClone/frontPage/header'
import CommentPage from './commentPage'

export default props => {
  return (
    <div>
      <Header />
      <CommentPage
        currentPost={props.currentPost}
        onAddComment={props.onAddComment}
        onUpdateComment={props.onUpdateComment}
        currentlyEditingComment={props.currentlyEditingComment}
        postId={props.postId}
      />

    </div>
  )
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment, updateComment, getCommentPagePost } from 'redux/actions/comments'
import CommentPage from 'components/redditClone/commentPage/index'

export class CommentPageContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCommentPagePost(this.props.params.postId))
  }
  render() {
    return (
      <CommentPage
        currentlyEditingComment={this.props.comments.currentlyEditingComment}
        onAddComment={() => this.props.dispatch(addNewComment())}
        onUpdateComment={comment => this.props.dispatch(updateComment(comment))}
        currentPost={this.props.comments.currentPost}
      />
    )
  }
}
export default connect(state => state)(CommentPageContainer)

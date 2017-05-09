import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment, updateComment, getCommentPagePost, getPostId } from 'redux/actions/comments'
import CommentPage from 'components/redditClone/commentPage/index'

export class CommentPageContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPostId(this.props.params.postId))
    this.props.dispatch(getCommentPagePost())
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

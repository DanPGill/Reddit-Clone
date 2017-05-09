import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment, updateComment, getComments } from 'redux/actions/comments'
import Comments from 'components/redditClone/comments/index'

export class CommentsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getComments())
  }
  render() {
    return (
      <Comments
        currentlyEditingComment={this.props.currentlyEditingComment}
        onAddComment={() => this.props.dispatch(addNewComment())}
        onUpdateComment={comment => this.props.dispatch(updateComment(comment))}
        currentPost={this.props.currentPost}
      />
    )
  }
}
export default connect(state => state.comments)(CommentsContainer)

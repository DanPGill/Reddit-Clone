import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment, updateComment, getPosts } from 'redux/actions/posts'
import Comments from 'components/redditClone/comments/index'

export class CommentsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  render() {
    return (
      <Comments
        currentlyEditingComment={this.props.currentlyEditingComment}
        onAddComment={() => this.props.dispatch(addNewComment())}
        onUpdateComment={comment => this.props.dispatch(updateComment(comment))}
        posts={this.props.posts}
        currentPostId={this.props.currentPostId}
      />
    )
  }
}
export default connect(state => state.posts)(CommentsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment, updateComment } from 'redux/actions/comments'
import { getPosts } from 'redux/actions/posts'
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
        post={this.props.posts}
      />
    )
  }
}
export default connect(state => state)(CommentsContainer)

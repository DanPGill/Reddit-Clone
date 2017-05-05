import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewPost, updatePostLink, updatePostTitle } from 'redux/actions/posts'
import NewPost from 'components/redditClone/newPosts/newPostPage'

export class NewPostContainer extends Component {
  render() {
    return (
      <NewPost
        currentlyEditingPost={this.props.currentlyEditingPost}
        onAddPost={() => this.props.dispatch(addNewPost())}
        onUpdatePostLink={link => this.props.dispatch(updatePostLink(link))}
        onUpdatePostTitle={title => this.props.dispatch(updatePostTitle(title))}
      />
    )
  }
}

export default connect(state => state.posts)(NewPostContainer)

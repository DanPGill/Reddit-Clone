import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, addNewPost, updatePostLink, updatePostTitle } from 'redux/actions/posts.js'
import Reddit from 'components/redditClone/index.js'

export class RedditContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  render() {
    return (
      <Reddit
        posts={this.props.posts}
        currentlyEditingPost={this.props.currentlyEditingPost}
        loading={this.props.loading}
        onAddPost={() => this.props.dispatch(addNewPost())}
        onUpdatePostLink={link => this.props.dispatch(updatePostLink(link))}
        onUpdatePostTitle={title => this.props.dispatch(updatePostTitle(title))}
      />
    )
  }
}
export default connect(state => state.posts)(RedditContainer)

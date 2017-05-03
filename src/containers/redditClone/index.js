import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, addNewPost } from 'redux/actions/posts.js'
import Reddit from 'components/redditClone/index.js'

export class RedditContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  render() {
    return <Reddit posts={this.props.posts} loading={this.props.loading} onAddPost={(link, title, postId) => this.props.dispatch(addNewPost(link, title, postId))} />
  }
}
export default connect(state => state.posts)(RedditContainer)

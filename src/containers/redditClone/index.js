import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'redux/actions/posts.js'
import Reddit from 'components/redditClone/index.js'

export class RedditContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  render() {
    return <Reddit posts={this.props.posts} loading={this.props.loading} />
  }
}
export default connect(state => state.posts)(RedditContainer)

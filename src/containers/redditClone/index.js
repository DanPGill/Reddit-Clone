import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reddit from 'components/redditClone/index.js'

export class RedditContainer extends Component {
  render() {
    return <Reddit posts={this.props.posts} />
  }
}
export default connect(state => state.posts)(RedditContainer)

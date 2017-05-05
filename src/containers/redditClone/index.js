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
      <div>
        <Reddit
          posts={this.props.posts}
          loading={this.props.loading}
          currentlyEditingPost={this.props.currentlyEditingPost}
          onAddPost={() => this.props.dispatch(addNewPost())}
          onUpdatePostLink={link => this.props.dispatch(updatePostLink(link))}
          onUpdatePostTitle={title => this.props.dispatch(updatePostTitle(title))}
        />
      </div>
    )
  }
}
export default connect(state => state.posts)(RedditContainer)

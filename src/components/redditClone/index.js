import React from 'react'
import _ from 'lodash'
import Header from 'components/redditClone/header.js'
import Posts from 'components/redditClone/posts.js'
import { newPostPage } from 'redux/actions/posts'

export default props => {
  return props.loading === true
    ? <p>Loading posts...</p>
    : <div>
        <Header />
        {_.map(props.posts, post => <Posts post={post} />)}
        <button onClick={newPostPage}>Add a New Post</button>
      </div>
}

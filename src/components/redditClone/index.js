import React from 'react'
import _ from 'lodash'
import Header from 'components/redditClone/header.js'
import Posts from 'components/redditClone/posts.js'

export default props => {
  return props.loading === true
    ? <p>Loading posts...</p>
    : <div>
        <Header />
        {_.map(props.posts, post => <Posts post={post} />)}
        <a href="/newPost">Add a New Post</a>
      </div>
}

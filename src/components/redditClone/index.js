import React from 'react'
import _ from 'lodash'
import Header from 'components/redditClone/header.js'
import Posts from 'components/redditClone/posts.js'
import NewPost from 'components/redditClone/newPost.js'

export default props => {
  return props.loading === true
    ? <p>Loading posts...</p>
    : <div>
        <Header />
        {_.map(props.posts, post => <Posts post={post} />)}
        <NewPost onAddPost={props.onAddPost} onUpdatePostLink={props.onUpdatePostLink} onUpdatePostTitle={props.onUpdatePostTitle} />
      </div>
}

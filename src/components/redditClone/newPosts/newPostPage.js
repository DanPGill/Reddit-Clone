import React from 'react'
import NewPost from 'components/redditClone/newPosts/newPost'
import Header from 'components/redditClone/header.js'

export default props => {
  return (
    <div>
      <Header />
      <NewPost onAddPost={props.onAddPost} onUpdatePostLink={props.onUpdatePostLink} onUpdatePostTitle={props.onUpdatePostTitle} />
    </div>
  )
}

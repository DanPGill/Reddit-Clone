import React from 'react'
import NewPost from 'components/redditClone/newPosts/newPost'
import Header from 'components/redditClone/frontPage/header'

export default props => {
  return (
    <div>
      <Header />
      <NewPost onAddPost={props.onAddPost} onUpdatePostLink={props.onUpdatePostLink} onUpdatePostTitle={props.onUpdatePostTitle} />
    </div>
  )
}

import React from 'react'
import _ from 'lodash'
import Header from 'components/redditClone/header.js'
import Posts from 'components/redditClone/posts.js'

export default props => {
  return (
    <div>
      <Header />
      {_.map(props.posts, post => <Posts post={post} />)}
    </div>
  )
}

import React from 'react'
import _ from 'lodash'
import Post from 'components/redditClone/frontPage/post'

export default props => {
  return (
    <div>
      <div>
        {_.map(props.posts, post => <Post post={post} />)}
      </div>
      <p>Comments</p>
      <div>
        {_.map(props.posts, comment => _.map(comment.comments, c => <p>{c}</p>))}
      </div>

    </div>
  )
}

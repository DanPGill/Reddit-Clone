import React from 'react'
import _ from 'lodash'
import Post from 'components/redditClone/frontPage/post'

export default props => {
  return (
    <div>
      <div>
        <Post post={props.currentPost} />
      </div>
      <p>Comments</p>
      <div>
        {_.map(props.post.comments, comment => {
          return <p>{comment}</p>
        })}
      </div>
    </div>
  )
}

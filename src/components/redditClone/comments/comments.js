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
        {_.map(props.currentPost.comments, comment => <p>{comment}</p>)}
      </div>

    </div>
  )
}

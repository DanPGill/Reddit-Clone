import React from 'react'
import _ from 'lodash'
import Header from 'components/redditClone/header.js'
import Posts from 'components/redditClone/posts.js'
import f from 'styles/frontpage'

export default props => {
  return props.loading === true
    ? <p>Loading posts...</p>
    : <div>
        <Header />
        <div className={f.frontpagecontainer2}>
          <div className={f.frontpagecontainer}>
            {_.map(props.posts, post => <Posts post={post} />)}
          </div>
          <div>
            <div className={f.sidebar}>
              <a href="/newPost">Add a New Post</a>
            </div>
          </div>
        </div>
      </div>
}

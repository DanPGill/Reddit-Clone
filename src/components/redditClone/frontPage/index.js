import React from 'react'
import _ from 'lodash'
import Header from './header'
import Post from './post'
import styles from './styles'

export default props => {
  return props.loading === true
    ? <p>Loading posts...</p>
    : <div>
        <Header />
        <div className={styles.frontpagecontainer}>
          <div className={styles.postcontainer}>
            {_.map(props.posts, post => <Post post={post} />)}
          </div>
          <div>
            <div className={styles.sidebar}>
              <a href="/newPost">Add a New Post</a>
            </div>
          </div>
        </div>
      </div>
}

import React from 'react'
import Header from 'components/redditClone/header.js'
import Posts from 'components/redditClone/posts.js'

const test = { upVotes: 5, postLink: 'https://www.reddit.com/', postTitle: 'The Original' }

export default () => {
  return (
    <div>
      <Header />
      <Posts post={test} />
    </div>
  )
}

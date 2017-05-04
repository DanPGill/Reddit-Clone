import { database } from 'firebase'

export const getPostsRequested = () => {
  return { type: 'GET_POSTS_REQUESTED' }
}

export const getPostsRejected = () => {
  return { type: 'GET_POSTS_REJECTED', payload: 'An error occurred when retrieving data' }
}

export const getPostsSuccess = post => {
  return { type: 'GET_POSTS_SUCCESS', payload: post }
}

export const getPosts = () => dispatch => {
  dispatch(getPostsRequested())
  return database().ref('/posts/').once(
    'value',
    snap => {
      dispatch(getPostsSuccess(snap.val()))
    },
    error => {
      console.log(error)
      dispatch(getPostsRejected())
    },
  )
}

export const addNewPost = (link, title) => {
  const newPostId = database().ref().push().key
  const updates = {}
  updates[`posts/${newPostId}`] = {
    link: link,
    title: title,
    upvotes: 0,
  }
  return database().ref().update(updates)
}

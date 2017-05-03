import { database } from 'firebase'

export const getPostsRequested = () => dispatch => {
  dispatch({ type: 'GET_POSTS_REQUESTED' })
}

export const getPostsRejected = () => dispatch => {
  dispatch({ type: 'GET_POSTS_REJECTED', payload: 'An error occurred when retrieving data' })
}

export const getPostsSuccess = post => dispatch => {
  dispatch({ type: 'GET_POSTS_SUCCESS', payload: post })
}

export const getPosts = () => dispatch => {
  dispatch(getPostsRequested())
  return database()
    .ref('/posts/')
    .once('value', snap => {
      const post = snap.val()
      dispatch(getPostsSuccess(post))
    })
    .catch(error => {
      console.log(error)
      dispatch(getPostsRejected())
    })
}

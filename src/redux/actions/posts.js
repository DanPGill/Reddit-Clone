import { database } from 'firebase'
import { browserHistory } from 'react-router'

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
  return database().ref('/posts/').on(
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

export const addNewPost = () => (dispatch, getState) => {
  const newPost = database().ref('posts/').push({
    link: getState().posts.currentlyEditingPost.link,
    title: getState().posts.currentlyEditingPost.title,
    upvotes: 0,
  })
  browserHistory.push(`posts/${newPost.key}`)
}

export const updatePostLink = newPost => {
  return { type: 'UPDATE_POST_LINK', payload: newPost }
}

export const updatePostTitle = newPost => {
  return { type: 'UPDATE_POST_TITLE', payload: newPost }
}

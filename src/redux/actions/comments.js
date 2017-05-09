import { database } from 'firebase'

export const getCommentsRequested = () => {
  return { type: 'GET_COMMENTS_REQUESTED' }
}

export const getCommentsRejected = () => {
  return { type: 'GET_COMMENTS_REJECTED', payload: 'An error occurred when retrieving data' }
}

export const getCommentsSuccess = comment => {
  return { type: 'GET_COMMENTS_SUCCESS', payload: comment }
}

export const getComments = () => (dispatch, getState) => {
  dispatch(getCommentsRequested())
  return database().ref(`/posts/${getState().comments.currentPostId}`).on(
    'value',
    snap => {
      dispatch(getCommentsSuccess(snap.val()))
    },
    error => {
      console.log(error)
      dispatch(getCommentsRejected())
    },
  )
}

export const updateComment = newComment => {
  return { type: 'UPDATE_COMMENT', payload: newComment }
}

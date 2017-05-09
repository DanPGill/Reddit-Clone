import { database } from 'firebase'

export const getCommentPagePostRequested = () => {
  return { type: 'GET_COMMENT_PAGE_POST_REQUESTED' }
}

export const getCommentPagePostRejected = () => {
  return { type: 'GET_COMMENT_PAGE_POST_REJECTED', payload: 'An error occurred when retrieving data' }
}

export const getCommentPagePostSuccess = commentPage => {
  return { type: 'GET_COMMENT_PAGE_POST_SUCCESS', payload: commentPage }
}

export const getPostId = postId => {
  return { type: 'GET_POST_ID', payload: postId }
}

export const getCommentPagePost = () => (dispatch, getState) => {
  dispatch(getCommentPagePostRequested())
  return database().ref(`/posts/${getState().comments.currentPostId}`).on(
    'value',
    snap => {
      dispatch(getCommentPagePostSuccess(snap.val()))
    },
    error => {
      console.log(error)
      dispatch(getCommentPagePostRejected())
    },
  )
}

export const updateComment = newComment => {
  return { type: 'UPDATE_COMMENT', payload: newComment }
}

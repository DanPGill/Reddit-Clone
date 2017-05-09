const initialState = { currentlyEditingComment: '', currentPost: [], loading: true, currentPostId: '' }

export default function comments(state = initialState, action) {
  switch (action.type) {
    case 'GET_COMMENT_PAGE_POST_REJECTED':
      alert(action.payload)
      return { ...state, currentPost: [], loading: false }

    case 'GET_COMMENT_PAGE_POST_SUCCESS':
      return { ...state, currentPost: action.payload, loading: false }

    case 'GET_COMMENT_PAGE_POST_REQUESTED':
      return { ...state, currentPost: [], loading: true }

    case 'GET_POST_ID':
      return { ...state, currentPostId: action.payload }

    case 'UPDATE_COMMENT':
      return { ...state, currentlyEditingComment: action.payload }

    default:
      return state
  }
}

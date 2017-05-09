const initialState = { currentlyEditingComment: '', currentPost: [], currentPostId: '-KjcA0EAKUKCfPNvgdvy', loading: true }

export default function comments(state = initialState, action) {
  switch (action.type) {
    case 'GET_COMMENTS_REJECTED':
      alert(action.payload)
      return { ...state, currentPost: [], loading: false }

    case 'GET_COMMENTS_SUCCESS':
      return { ...state, currentPost: action.payload, loading: false }

    case 'GET_COMMENTS_REQUESTED':
      return { ...state, currentPost: [], loading: true }

    case 'UPDATE_COMMENT':
      return { ...state, currentlyEditingComment: action.payload }

    default:
      return state
  }
}

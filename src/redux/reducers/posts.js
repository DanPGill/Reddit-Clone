const initialState = { posts: [], loading: true }

export default function posts(state = initialState, action) {
  switch (action.type) {
    case 'GET_POSTS_REJECTED':
      alert(action.payload)
      return { ...state, posts: [], loading: false }

    case 'GET_POSTS_SUCCESS':
      return { ...state, posts: action.payload, loading: false }

    case 'GET_POSTS_REQUESTED':
      return { ...state, posts: [], loading: true }

    default:
      return state
  }
}

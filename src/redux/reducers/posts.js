const initialState = { posts: [], loading: true, currentlyEditingPost: { link: '', title: '' } }

export default function posts(state = initialState, action) {
  switch (action.type) {
    case 'GET_POSTS_REJECTED':
      alert(action.payload)
      return { ...state, posts: [], loading: false }

    case 'GET_POSTS_SUCCESS':
      return { ...state, posts: action.payload, loading: false }

    case 'GET_POSTS_REQUESTED':
      return { ...state, posts: [], loading: true }

    case 'UPDATE_POST_LINK':
      return { ...state, currentlyEditingPost: { ...state.currentlyEditingPost, link: action.payload } }

    case 'UPDATE_POST_TITLE':
      return { ...state, currentlyEditingPost: { ...state.currentlyEditingPost, title: action.payload } }

    default:
      return state
  }
}

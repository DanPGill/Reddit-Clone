import Route from './components/app/route'
import Reddit from './containers/redditClone/reddit'
import NewPost from './containers/redditClone/newPostPage'
import CommentPage from './containers/redditClone/commentPage'

export const routes = [{ path: 'newPost', component: NewPost }, { path: `posts/(:postId)`, component: CommentPage }]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Reddit },
  childRoutes: routes,
}

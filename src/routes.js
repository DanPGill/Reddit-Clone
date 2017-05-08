import Route from './components/app/route'
import Reddit from './containers/redditClone/reddit'
import NewPost from './containers/redditClone/newPostPage'
import Comments from './containers/redditClone/comments'

export const routes = [{ path: 'newPost', component: NewPost }, { path: 'comments', component: Comments }]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Reddit },
  childRoutes: routes,
}

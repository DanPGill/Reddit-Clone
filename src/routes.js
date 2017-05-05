import Route from './components/app/route'
import Reddit from './containers/redditClone/reddit'
import NewPost from './containers/redditClone/newPostPage'

export const routes = [{ path: 'newPost', component: NewPost }]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Reddit },
  childRoutes: routes,
}

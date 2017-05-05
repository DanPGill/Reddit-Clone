import Route from './components/app/route'
import Reddit from './containers/redditClone'
import NewPost from './components/redditClone/newPost'

export const routes = [{ path: 'newPost', component: NewPost }]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Reddit },
  childRoutes: routes,
}

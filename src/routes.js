import Route from './components/app/route'
import Reddit from './containers/redditClone'

export const routes = [
  {
    path: 'redditClone',
    component: Reddit,
  },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Reddit },
  childRoutes: routes,
}

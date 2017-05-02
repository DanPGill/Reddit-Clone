import Route from './components/app/route'
import Header from './containers/redditClone'

export const routes = [{ path: 'redditClone', component: Header }]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Header },
  childRoutes: routes,
}

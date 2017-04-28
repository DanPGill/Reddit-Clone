import Route from './components/app/route'

import Landing from './components/landing'

export const routes = []

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes,
}

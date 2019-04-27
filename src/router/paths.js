/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard',
    name: 'Consumers'
  },
  {
    path: '/user-profile',
    name: 'Ranking',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Facets',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography',
    name: 'Sponsored Hotels'
  },
  {
    path: '/icons',
    view: 'Icons',
    name: 'Payment Rules'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Providers',
    view: 'Upgrade'
  }
]

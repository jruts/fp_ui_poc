/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/consumers',
    // Relative to /src/views
    view: 'Consumers',
    name: 'Consumers'
  },
  {
    path: '/ranking',
    name: 'Ranking',
    view: 'Ranking'
  },
  {
    path: '/facets',
    name: 'Facets',
    view: 'Facets'
  },
  {
    path: '/sponsorship',
    view: 'Sponsorship',
    name: 'Sponsored Hotels'
  },
  {
    path: '/paymentRules',
    view: 'PaymentRules',
    name: 'Payment Rules'
  },
  {
    path: '/providers',
    name: 'Providers',
    view: 'Providers'
  }
]

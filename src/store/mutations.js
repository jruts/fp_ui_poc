// https://vuex.vuejs.org/en/mutations.html

export default {
  addConsumer (state, consumer) {
    state.consumers.push(consumer)
  },
  addRanking (state, ranking) {
    state.ranking.push(ranking)
  },
  addFacets (state, facets) {
    state.facets.push(facets)
  },
  addSponsorship (state, sponsorship) {
    state.sponsorship.push(sponsorship)
  },
  addPaymentRules (state, paymentRules) {
    state.paymentRules.push(paymentRules)
  },
  addProvider (state, provider) {
    state.providers.push(provider)
  }
}

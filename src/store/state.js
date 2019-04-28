// https://vuex.vuejs.org/en/state.html

export default {
  consumers: [],
  ranking: [
    {
      id: 'DLITE_UK',
      description: 'Ranking rules for the DLITE platform for the UK market'
    },
    {
      id: 'DLITE_COE',
      description: 'Ranking rules for the DLITE platform for the COE market'
    }
  ],
  facets: [
    {
      id: 'DLITE_UK',
      description: 'Facet rules for the DLITE platform for the UK market'
    },
    {
      id: 'DLITE_BE',
      description: 'Facet rules for the DLITE platform for the BE market'
    },
    {
      id: 'DLITE_NL',
      description: 'Facet rules for the DLITE platform for the NL market'
    }
  ],
  sponsorship: [
    {
      id: 'DLITE_UK',
      description: 'Sponsored hotels for the DLITE platform for the UK market'
    },
    {
      id: 'DLITE_COE',
      description: 'Sponsored hotels for the DLITE platform for the COE market'
    }
  ],
  paymentRules: [
    {
      id: 'DLITE_UK',
      description: 'Payment rules for the DLITE platform for the UK market'
    },
    {
      id: 'DLITE_COE',
      description: 'Payment rules for the DLITE platform for the COE market'
    }
  ],
  providers: [
    {
      id: 'PLAYERHUB_DLITE_COE',
      description: 'Playerhub connection for DLITE BE',
      provider: 'PLAYERHUB',
      url: 'https://proxy.thomascook.io/playerhub_dlite_be',
      authenticationKey: 'S2dDXf4df45dfj343dD'
    },
    {
      id: 'ATCORE_DLITE_UK',
      description: 'AtCore connection for DLITE UK',
      provider: 'ATCORE',
      url: 'https://proxy.thomascook.io/atcore_dlite_uk',
      authenticationKey: 'qwd344s4fefw4df4D'
    }
  ]
}

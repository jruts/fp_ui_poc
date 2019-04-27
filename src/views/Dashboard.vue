<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Consumers"
          text="This is a list of all consumers of the flexible platform with their configuration"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.key }}</td>
              <td>{{ item.provider }}</td>
              <td>{{ item.ranking }}</td>
              <td>{{ item.facets }}</td>
              <td>{{ item.sponsorship }}</td>
              <td>{{ item.paymentRules }}</td>
              <td>
                <v-switch
                  v-model="item.active"
                ></v-switch>
              </td>  
            </template>
          </v-data-table>
        </material-card>
        <v-btn
      fab
      bottom
      right
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
      </v-flex>
    </v-layout>
     <v-btn
      fab
      bottom
      right
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Key',
        value: 'key'
      },
      {
        text: 'Provider ID',
        value: 'provider'
      },
      {
        text: 'Ranking ID',
        value: 'ranking'
      },
      {
        text: 'Facets ID',
        value: 'facets',
      },
      {
        text: 'Sponsorship ID',
        value: 'sponsorship',
      },
      {
        text: 'Payment Rules ID',
        value: 'paymentRules',
      },
      {
        text: 'Active',
        value: 'active',
      }
    ],
    items: [
      {
        name: 'Expedia',
        key: 'sSfjsdh4457sd',
        provider: 'provider_id_1',
        ranking: 'ranking_id_1',
        facets: 'facets_id_1',
        sponsorship: 'sponsorship_id_1',
        paymentRules: 'payment_rules_id_1',
        active: true
      },
      {
        name: 'BE',
        key: 'dssa577gfsdas',
        provider: 'provider_id_1',
        ranking: 'ranking_id_2',
        facets: 'facets_id_2',
        sponsorship: 'sponsorship_id_2',
        active: true
      },{
        name: 'UK',
        key: 'ubskl4545dsmn',
        provider: 'provider_id_2',
        ranking: 'ranking_id_3',
        facets: 'facets_id_3',
        sponsorship: 'sponsorship_id_3',
        paymentRules: 'payment_rules_id_3'
      },{
        name: 'Airtours',
        key: 'ifdn4idiuvn4',
        provider: 'provider_id_3',
        facets: 'facets_id_3',
        sponsorship: 'sponsorship_id_4',
        paymentRules: 'payment_rules_id_3',
        active: true
      },
    ]
  })
}
</script>

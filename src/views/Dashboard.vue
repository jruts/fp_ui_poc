<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex md12>
          <material-card
            color="green"
            title="Consumers"
            text="This is a list of all consumers of the flexible platform with their configuration"
          >
            <v-data-table :headers="headers" :items="items" hide-actions>
              <template slot="headerCell" slot-scope="{ header }">
                <span
                  class="subheading font-weight-light text-success text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template slot="items" slot-scope="{ item }">
                <td>{{ item.name }}</td>
                <td>{{ item.key }}</td>
                <td>{{ item.provider }}</td>
                <td>{{ item.ranking }}</td>
                <td>{{ item.facets }}</td>
                <td>{{ item.sponsorship }}</td>
                <td>{{ item.paymentRules }}</td>
                <td>
                  <v-switch v-model="item.active"></v-switch>
                </td>
              </template>
            </v-data-table>
          </material-card>
        </v-flex>
        <v-flex md12>
          <v-btn fab color="green" dark @click="dialog = !dialog">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Create consumer</v-card-title>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Consumer details
            <small>Fill in the consumer details</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card flat>
              <v-card-text>
                <v-text-field label="Name"></v-text-field>
                <v-text-field label="Description"></v-text-field>
              </v-card-text>
              <v-btn color="green" @click="e6 = 2">Continue</v-btn>
            </v-card>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Add services</v-stepper-step>

          <v-stepper-content step="2">
            <v-card flat>
              <v-card-text>
                <v-select
                  v-model="select"
                  :items="providers"
                  :rules="[v => !!v || 'Item is required']"
                  label="Provider"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="rankings"
                  :rules="[v => !!v || 'Item is required']"
                  label="Ranking"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="facets"
                  :rules="[v => !!v || 'Item is required']"
                  label="Facets"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="sponsorships"
                  :rules="[v => !!v || 'Item is required']"
                  label="Sponsorship"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="paymentRules"
                  :rules="[v => !!v || 'Item is required']"
                  label="Payment Rules"
                  required
                ></v-select>
              </v-card-text>
              <v-btn color="green" @click="e6 = 3">Continue</v-btn>
            </v-card>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="3">Review Setup</v-stepper-step>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="green" @click="e6 = 1">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="green" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    providers: [ 'provider_id_1', 'provider_id_2', 'create new'],
    rankings: [ 'ranking_id_1', 'ranking_id_2', 'create new'],
    facets: [ 'facets_id_1', 'facets_id_2', 'create new'],
    sponsorships: [ 'sponsorship_id_1', 'create new'],
    paymentRules: [ 'pr_id_1', 'pr_id_2', 'create new'],
    e6: 1,
    dialog: false,
    headers: [
      {
        text: "Name",
        value: "name"
      },
      {
        text: "Key",
        value: "key"
      },
      {
        text: "Provider ID",
        value: "provider"
      },
      {
        text: "Ranking ID",
        value: "ranking"
      },
      {
        text: "Facets ID",
        value: "facets"
      },
      {
        text: "Sponsorship ID",
        value: "sponsorship"
      },
      {
        text: "Payment Rules ID",
        value: "paymentRules"
      },
      {
        text: "Active",
        value: "active"
      }
    ],
    items: [
      {
        name: "Expedia",
        key: "sSfjsdh4457sd",
        provider: "provider_id_1",
        ranking: "ranking_id_1",
        facets: "facets_id_1",
        sponsorship: "sponsorship_id_1",
        paymentRules: "payment_rules_id_1",
        active: true
      },
      {
        name: "BE",
        key: "dssa577gfsdas",
        provider: "provider_id_1",
        ranking: "ranking_id_2",
        facets: "facets_id_2",
        sponsorship: "sponsorship_id_2",
        active: true
      },
      {
        name: "UK",
        key: "ubskl4545dsmn",
        provider: "provider_id_2",
        ranking: "ranking_id_3",
        facets: "facets_id_3",
        sponsorship: "sponsorship_id_3",
        paymentRules: "payment_rules_id_3"
      },
      {
        name: "Airtours",
        key: "ifdn4idiuvn4",
        provider: "provider_id_3",
        facets: "facets_id_3",
        sponsorship: "sponsorship_id_4",
        paymentRules: "payment_rules_id_3",
        active: true
      }
    ]
  })
};
</script>

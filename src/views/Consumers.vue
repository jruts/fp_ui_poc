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
            <v-text-field v-model="search" append-icon="mdi-search" label="Search"></v-text-field>
            <v-data-table :headers="headers" :items="items" hide-actions :search="search">
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
                <td>{{ item.facet }}</td>
                <td>{{ item.sponsorship }}</td>
                <td>{{ item.paymentRule }}</td>
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
                <v-text-field v-model="consumer.name" label="Name"></v-text-field>
                <v-text-field v-model="consumer.description" label="Description"></v-text-field>
              </v-card-text>
              <v-btn color="green" @click="e6 = 2">Continue</v-btn>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Add services</v-stepper-step>

          <v-stepper-content step="2">
            <v-card flat>
              <v-card-text>
                <v-select
                  v-model="consumer.provider"
                  :items="providers"
                  item-text="description"
                  item-value="id"
                  :rules="[v => !!v || 'Item is required']"
                  label="Provider"
                  required
                ></v-select>
                <v-select
                  v-model="consumer.ranking"
                  :items="rankings"
                  item-text="description"
                  item-value="id"
                  :rules="[v => !!v || 'Item is required']"
                  label="Ranking"
                  required
                ></v-select>
                <v-select
                  v-model="consumer.facet"
                  :items="facets"
                  item-text="description"
                  item-value="id"
                  :rules="[v => !!v || 'Item is required']"
                  label="Facets"
                  required
                ></v-select>
                <v-select
                  v-model="consumer.sponsorship"
                  :items="sponsorships"
                  item-text="description"
                  item-value="id"
                  :rules="[v => !!v || 'Item is required']"
                  label="Sponsorship"
                  required
                ></v-select>
                <v-select
                  v-model="consumer.paymentRule"
                  :items="paymentRules"
                  item-text="description"
                  item-value="id"
                  :rules="[v => !!v || 'Item is required']"
                  label="Payment Rules"
                  required
                ></v-select>
              </v-card-text>
            </v-card>
          </v-stepper-content>
        </v-stepper>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" @click="dialog = false">Cancel</v-btn>
          <v-btn color="green" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { generate } from "short-uuid";

export default {
  methods: {
    save() {
      console.log(this.consumer);
      this.saveToStore({
        name: this.consumer.name,
        description: this.consumer.description,
        key: generate(),
        provider: this.consumer.provider,
        facet: this.consumer.facet,
        ranking: this.consumer.ranking,
        sponsorship: this.consumer.sponsorship,
        paymentRule: this.consumer.paymentRule
      });
      this.dialog = false;
      this.consumer = {
        name: "",
        description: "",
        provider: null,
        ranking: null,
        sponsorship: null,
        paymentRule: null
      };
      this.e6 = 1
    },
    ...mapMutations({
      saveToStore: "addConsumer"
    })
  },
  computed: mapState({
    items: state => state.consumers,
    providers: state => state.providers,
    rankings: state => state.ranking,
    facets: state => state.facets,
    sponsorships: state => state.sponsorship,
    paymentRules: state => state.paymentRules
  }),
  data: () => ({
    search: "",
    dialog: false,
    consumer: {
      name: "",
      description: "",
      provider: null,
      facet: null,
      ranking: null,
      sponsorship: null,
      paymentRule: null
    },
    e6: 1,
    headers: [
      {
        text: "Name",
        value: "name"
      },
      {
        text: "Authentication Key",
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
    ]
  })
};
</script>

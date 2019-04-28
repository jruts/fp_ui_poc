<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex xs12 md4>
        <material-card
          color="green"
          title="Provider Configuration"
          text="This is a list of all the provider configurations"
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
              <tr @click="selectItem(item.id)">
                <td>{{ item.id }}</td>
                <td>{{ item.description }}</td>
              </tr>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex xs12 md8 v-if="selectedItem">
        <material-card>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">{{ selectedItem.id }} configuration</h6>
            <h4 class="card-title font-weight-light">{{ selectedItem.description }}</h4>
          </v-card-text>
          <v-card-text>
            <h4 class="card-title font-weight-light">{{ selectedItem.provider }}</h4>
            <h4 class="card-title font-weight-light">{{ selectedItem.url }}</h4>
            <h4 class="card-title font-weight-light">{{ selectedItem.authenticationKey }}</h4>
            <v-btn color="success" class="font-weight-light" @click="update">Update</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex md12>
        <v-btn fab color="green" dark @click="dialogVisible = !dialogVisible">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialogVisible" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Add Provider</v-card-title>
        <v-card-text>
          <v-text-field v-model="dialog.id" label="ID"></v-text-field>
          <v-text-field v-model="dialog.description" label="Description"></v-text-field>
          <v-select
            v-model="dialog.provider"
            :items="providers"
            :rules="[v => !!v || 'Item is required']"
            label="Provider"
            required
          ></v-select>
          <v-text-field v-model="dialog.url" label="Url"></v-text-field>
          <v-text-field v-model="dialog.authenticationKey" label="Authentication Key"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="dialogVisible = false">Test connection</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green" @click="dialogVisible = false">Cancel</v-btn>
          <v-btn color="green" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { find } from "lodash";

export default {
  methods: {
    update() {
      this.selectedItem = '';
    },
    selectItem(id) {
      this.selectedItem = find(this.items, i => i.id === id);
    },
    save() {
      this.saveToStore({
        id: this.dialog.id,
        description: this.dialog.description,
        provider: this.dialog.provider,
        url: this.dialog.url,
        authenticationKey: this.dialog.authenticationKey
      });
      (this.dialogVisible = false), (this.dialog.id = "");
      this.dialog.description = "";
      (this.dialog.provider = null), (this.dialog.url = "");
      this.dialog.authenticationKey = "";
    },
    ...mapMutations({
      saveToStore: "addProvider"
    })
  },
  computed: mapState({
    items: state => state.providers
  }),
  data: () => ({
    selectedItem: "",
    search: "",
    providers: ['ATCORE', 'PLAYERHUB'],
    dialogVisible: false,
    dialog: {
      id: "",
      description: "",
      provider: null,
      url: "",
      authenticationKey: ""
    },
    headers: [
      {
        text: "ID",
        value: "id"
      },
      {
        text: "Description",
        value: "description"
      }
    ]
  })
};
</script>

<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md4>
        <material-card
          color="green"
          title="Facets Configuration"
          text="This is a list of all the facets configurations"
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
              <td>{{ item.id }}</td>
              <td>{{ item.description }}</td>

              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

      <v-flex xs12 md8>
        <material-card>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">X configuration</h6>
            <h4 class="card-title font-weight-light">This can be whatever it needs to be</h4>
            <v-btn color="success" class="font-weight-light">Update</v-btn>
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
        <v-card-title class="grey lighten-4 py-4 title">Add Facets Configuration</v-card-title>
        <v-card-text>
          <v-text-field v-model="dialog.id" label="ID"></v-text-field>
          <v-text-field v-model="dialog.description" label="Description"></v-text-field>
        </v-card-text>
        <v-card-actions>
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

export default {
  methods: {
    save() {
      this.saveToStore({
        id: this.dialog.id,
        description: this.dialog.description
      });
      (this.dialogVisible = false), (this.dialog.id = "");
      this.dialog.description = "";
    },
    ...mapMutations({
      saveToStore: "addFacets"
    })
  },
  computed: mapState({
    items: state => state.facets
  }),
  data: () => ({
    search: "",
    dialogVisible: false,
    dialog: {
      id: "",
      description: ""
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

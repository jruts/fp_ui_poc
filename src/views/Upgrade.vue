<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md4
      >
        <material-card
          color="green"
          title="Provider Configuration"
          text="This is a list of all the provider configurations"
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
              <td>{{ item.id }}</td>
              <td>{{ item.description }}</td>

              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
        
      <v-flex
        xs12
        md8
      >
        <material-card>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">Atcore channel X configuration</h6>
            <h4 class="card-title font-weight-light">This can be whatever it needs to be</h4>
            <v-btn
              color="success"
              class="font-weight-light"
            >Update</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: 'Description',
        value: 'description'
      },
    ],
    items: [
      {
        id: 'provider_id_1',
        description: 'Atcore for channel X',
      },
      {
        id: 'provider_id_2',
        description: 'Atcore for channel Y',
      },{
        id: 'provider_id_3',
        description: 'Playerhub for channel Z',
      }
    ]
  })
}
</script>

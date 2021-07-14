<template>
  <table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th colspan="2">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="pers of persons" :key="pers.id">
      <td>{{ pers.first }}</td>
      <td>{{ pers.last }}</td>
      <td>{{ pers.age }}</td>
      <td>
        <router-link to="/edit">Edit</router-link>
      </td>
      <td>
        <button type="button" @click="deleteP(pers.id)">Delete</button>
      </td>
    </tr>
  </tbody>
  </table>
</template>

<script>
import {getPersons, deletePerson} from '../persManager';

export default {
  name: 'PersonsList',
  data(){
    return {
      persons: []
    }
  },
  methods: {
    deleteP (id) {
      deletePerson(id);
    }
  },
  async created() {
    this.persons = await getPersons();
  }
}
</script>
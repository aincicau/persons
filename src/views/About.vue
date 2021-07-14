<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DummyPerson />
  </div>
</template>

<script>
import DummyPerson from '../components/DummyPerson.vue'

export default {
  components: {
    DummyPerson
  }  
}
</script>
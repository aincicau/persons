<template>
    <form @submit.prevent="savePerson">
        <label for="">First Name</label><br>
        <input type="text" v-model="first"/><br>
        <label for="">Last Name</label><br>
        <input type="text" v-model="last"/><br>
        <label for="">Age</label><br>
        <Counter @counterChanged="handleAgeChanged" :initialValue="age" />
        <button type="button" @click="cancelEdit">Cancel</button>
        <button type="submit">Save</button>
    </form>
</template>

<script>
import Counter from '../components/Counter.vue'
import { getPersonById, updatePerson } from '../persManager'

export default {
    props: ['id'],
    components:{
        Counter
    },
    data(){
        const pers = getPersonById(this.id);
        const {first, last, age} = pers;
        return {
            first, last, age
        }
    },
    methods: {
        handleAgeChanged(value){
            this.age = value;
        },
        savePerson(){
            updatePerson(this.id, this.first, this.last, this.age);
            this.$router.push('/persons');
        },
        cancelEdit(){
            this.$router.push('/persons');
        }
    }
}
</script>

<style scoped>
button {
    margin: 10px;
}
</style>
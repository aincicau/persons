<template>
    <div>
        <button @click="dec()" type="button">-</button>
        <span>{{ value }}</span>
        <button @click="inc()" type="button">+</button>
    </div>
</template>

<script>
export default {
    props: {
        initialValue :{
            type: Number,
            default: 0
        }
    },
    emits: ['counterChanged'],
    data() {
        return{
            value: this.initialValue
        }
    },
    methods: {
        inc(){
            this.value++;
            this.$emit('counterChanged', this.value);
        },
        dec(){
            this.value--;
            this.$emit('counterChanged', this.value);
        }
    }
}
</script>

<style scoped>
span {
    margin: 0px 10px 0 10px;
}
</style>
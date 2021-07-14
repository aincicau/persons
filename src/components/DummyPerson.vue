<template>
    <div>{{ firstName }} - {{ lastName }}</div>
</template>

<script>
export default {
    props: {
        firstName: {
            default: 'Ana'
        },
        lastName: {
            default: 'Popescu'
        }
    }
}
</script>
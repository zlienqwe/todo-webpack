<template>
    <div class="setting">
        <h1>{{ title }}</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'setting',
        data () {
            return {
                title: '历史',
                msg: '历史'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        font-weight: normal;
    }
</style>

<template>
    <div class="home">
        <h1>{{ title }}</h1>
        <h2>{{ msg }}</h2>

    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                title: 'Welcome to Miaohu',
                msg: '首ssss页'
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

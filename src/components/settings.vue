<template>
    <div class="settings">
        <h1>{{ title }}</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'settings',
        data () {
            return {
                title: '设置',
                msg: '设置'
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

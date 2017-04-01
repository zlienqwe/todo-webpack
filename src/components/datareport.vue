<template>
    <div class="datareport">
        <h1>{{ title }}</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'datareport',
        data () {
            return {
                title: '数据报表',
                msg: '数据报表'
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

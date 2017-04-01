<template>
    <div id="app">
        <div class="main_nav">
            <div>
            <router-link to='/'>home</router-link>
            </div>
            <div>
            <router-link to='/chat'>chat</router-link>
            </div>
            <div>
            <router-link to='/patient'>patient</router-link>
            </div>
            <div>
            <router-link to='/history'>history</router-link>
            </div>
            <div>
            <router-link to='/datareport'>datareport</router-link>
            </div>
            <div>
            <router-link to='/settings'>setting</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: row;
        height: 100%;
    }
    *{
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    a{
         text-decoration: none;
    }
    .main_nav{
        width: 70px;
        background-color: #989797;
    }
</style>

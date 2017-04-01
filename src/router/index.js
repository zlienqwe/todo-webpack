import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Chat from '@/components/chat'
import Patient from '@/components/patient'
import Hisotry from '@/components/history'
import Datareport from '@/components/datareport'
import Setting from '@/components/settings'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path:'/chat',
            name: 'Chat',
            component:Chat
        },
        {
            path:'/patient',
            name: 'Patient',
            component:Patient
        },
        {
            path:'/history',
            name: 'Hisotry',
            component:Hisotry
        },
        {
            path:'/datareport',
            name: 'Datareport',
            component:Datareport
        },
        {
            path:'/settings',
            name: 'Settings',
            component:Setting
        },


    ]
})

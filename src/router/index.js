import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import home from '@/components/home/home.vue'
import video from '@/components/home/video.vue'
import shoppingmall from '@/components/home/shoppingmall.vue'
import my from '@/components/home/my.vue'
import one from '@/components/home/one.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import land from '@/components/land.vue'
import register from '@/components/register.vue'
import $ from 'jquery'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        children: [
            { path: "/", redirect: "/home/0" },
            {
                path: 'home',
                component: home,
                children: [{
                    path: '/home/:index',
                    component: one,
                    name: "homeTab",

                }, ]
            },
            { path: 'video', component: video },
            { path: 'shoppingmall', component: shoppingmall },
            { path: 'my', component: my },
            { path: 'HelloWorld/:id', component: HelloWorld },
            { path: 'register', component: register },
            { path: 'land', component: land }


        ]
    }]
})
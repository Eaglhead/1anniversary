import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'warning',
        component: () => import('@/views/warning.vue')
    },
    {
        path: '/0',
        name: 'start',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/start.vue')
    },
    {
        path: '/1',
        name: 'first',
        component: () => import('@/views/first.vue')
    },
    {
        path: '/2',
        name: 'second',
        component: () => import('@/views/second.vue')
    },
    {
        path: '/3',
        name: 'third',
        component: () => import('@/views/third.vue')
    },
    {
        path: '/4',
        name: 'fourth',
        component: () => import('@/views/fourth.vue')
    },
    {
        path: '/5',
        name: 'fifth',
        component: () => import('@/views/fifth.vue')
    },
    {
        path: '/6',
        name: 'sixth',
        component: () => import('@/views/sixth.vue')
    },
    {
        path: '/7',
        name: 'seventh',
        component: () => import('@/views/seventh.vue')
    },
    {
        path: '/8',
        name: 'eighth',
        component: () => import('@/views/eighth.vue')
    },
    {
        path: '/9',
        name: 'ninth',
        component: () => import('@/views/ninth.vue')
    },
    {
        path: '/10',
        name: 'tenth',
        component: () => import('@/views/tenth.vue')
    },
    {
        path: '/11',
        name: 'eleventh',
        component: () => import('@/views/eleventh.vue')
    },
    {
        path: '/12',
        name: 'twelfth',
        component: () => import('@/views/twelfth.vue')
    },
    {
        path: '/13',
        name: 'thirteenth',
        component: () => import('@/views/thirteenth.vue')
    },
    {
        path: '/14',
        name: 'fourteenth',
        component: () => import('@/views/fourteenth.vue')
    },
    {
        path: '/15',
        name: 'fifteenth',
        component: () => import('@/views/fifteenth.vue')
    },
    {
        path: '/16',
        name: 'end',
        component: () => import('@/views/end.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router

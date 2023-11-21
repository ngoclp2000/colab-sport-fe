export default [
    {
        path: '/homepage/:key?',
        component: () => import("@/views/Homepage/HomePage.vue"),
        meta: {
            anonymous: true
        },
        name: 'Trang chủ',
        
    }
]
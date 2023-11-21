export default [
    {
        path: '/notfound/:key?',
        component: () => import("@/views/Others/NotFoundPage.vue"),
        meta: {
            anonymous: true
        },
        name: 'Không tìm thấy trang',
        
    }
]
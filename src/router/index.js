import { createRouter,createWebHistory } from "vue-router";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            component:()=>import('../index.vue'),
            name:'index',
            path:'/index'
        },
        {
            component:()=>import('../pages/login.vue'),
            name:'login',
            path:'/login'
        },
        {
            component:()=>import('../pages/jsonTranslate.vue'),
            name:'jsonTranslate',
            path:'/jsonTranslate'
        },
        {
            //实现路由重定向，当进入网页时，路由自动跳转到/student路由
            redirect:'../index',
            path:'/'
        }
    ]
})
export default router
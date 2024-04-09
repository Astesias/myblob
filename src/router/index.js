import { createRouter,createWebHistory } from "vue-router";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            component:()=>import('../test.vue'),
            name:'test',
            path:'/test'
        },

        // {
        //     //实现路由重定向，当进入网页时，路由自动跳转到/student路由
        //     redirect:'/student',
        //     path:'/'
        // }
    ]
})
export default router
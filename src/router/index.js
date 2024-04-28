import { createRouter,createWebHistory } from "vue-router";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {  
            path: '/',  
            name: 'AppHome',  
            component: import('@/views/AppHome.vue'), 
          },  
        {  
            path: '/:catchAll(.*)',  
            name: 'NotFound',
            component:() => import('@/views/NotFound.vue'),
        } ,

    ]
})

export default router
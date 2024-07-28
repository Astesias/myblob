import { createRouter,createWebHistory } from "vue-router";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {  
            path: '/',  
            name: 'AppHome',  
            component:() => import('@/views/AppHome.vue'), 
        },  
        {  
            path: '/article',  
            redirect: '/',
        },  
        {  
            path: '/article/:id',  
            name: 'AppArticle',  
            component:() => import('@/views/AppArticle.vue'), 
        },  
        {
            path: '/data',  
            name: 'data',
            component:() => import('@/views/FileList.vue'),  
        },
        {
            path: '/md',  
            name: 'MdComponent',
            component:() => import('@/components/MdComponent.vue'),  
        },
        {
            path: '/timeset',  
            name: 'AppTimeSet',
            component:() => import('@/views/AppTimeSet.vue'),  
        },
        {  
            path: '/:catchAll(.*)',  
            name: 'NotFound',
            component:() => import('@/views/AppNotFound.vue'),
        } ,

    ]
})

export default router
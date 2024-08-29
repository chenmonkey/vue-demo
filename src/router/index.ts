import { createWebHashHistory, createRouter } from 'vue-router';

// 公共路由
export const constantRoutes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('../components/HelloWorld.vue')
    }
]

const router = createRouter({
    // createWebHistory：路由模式路径不带#号，生产环境下不能直接访问，需要nginx转发；createWebHashHistory：路由模式路径带#号
    history: createWebHashHistory(),
    // 路由
    routes: constantRoutes,
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';
import { routes, anyRoutes } from './routes';


// 初始化路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...anyRoutes],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});



router.beforeEach(async (to, from, next) => {
    next() // 放行
})

export default router;

// 使用懒加载的方式引入组件
const Home = () => import("@/view/index.vue");

const NotFound = () => import("@/view/404.vue"); // 404 页面


export const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Home", isAuth: false },
  },
  // 404 页面
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "404 Not Found", isAuth: false },
  },
];

export const anyRoutes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "404",
      isAuth: false,
    },
  },
];

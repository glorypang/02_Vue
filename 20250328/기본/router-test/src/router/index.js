import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Members from '@/components/Members.vue';
import Videos from '@/components/Videos.vue';
import MemberInfo from '@/components/MemberInfo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/members',
      component: Members,
    },
    {
      path: '/videos',
      component: Videos,
    },
    {
      path: '/members/:id',
      component: MemberInfo,
    },
  ],
});

export default router;

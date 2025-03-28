import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import Test from '@/pages/Test.vue';
import TestChild from '@/pages/TestChild.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    // { path: '/videos', component: Videos },
    { path: '/test', component: Test },
    // 중첩 라우트
    {
      path: '/test',
      component: Test,
      children: [
        {
          path: ':num',
          component: TestChild,
          name: 'test/num',
        },
      ],
    },

    //  명명된 라우트
    {
      path: '/videos',
      component: Videos,
      name: 'vi',
    },
  ],
});
export default router;

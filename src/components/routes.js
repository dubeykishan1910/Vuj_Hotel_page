import { createRouter, createWebHistory } from 'vue-router';

import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';

import DefaultCom from '../components/DefaultCom.vue';

import ComC from "../components/ComC.vue";


const routes = [
  
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/login', name: 'LogIn', component: LogIn },
  // dynamic routes
  
  { path: '/', name: 'ComC', component: ComC },
  
  {
    name:'/NotFound',
    path:'/:pathMatch(.*)*',
    component:DefaultCom
}

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
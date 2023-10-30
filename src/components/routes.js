import { createRouter, createWebHistory } from 'vue-router';
import HomeCom from '../components/HomeCom.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import UpdateDetails from "../components/UpdateDetails.vue";
import DefaultCom from '../components/DefaultCom.vue';

import ComC from "../components/ComC.vue";
import AddC from "../components/AddC.vue";

const routes = [
  { path: '/', name: 'HomeCom', component: HomeCom },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/login', name: 'LogIn', component: LogIn },
  // dynamic routes
  { path: '/UpdateDetails/:id', name: 'UpdateDetails', component: UpdateDetails },
  { path: '/comp', name: 'ComC', component: ComC },
  { path: '/add', name: 'AddC', component: AddC },
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
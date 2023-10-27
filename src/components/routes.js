import { createRouter, createWebHistory } from 'vue-router';
import HomeCom from '../components/HomeCom.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import UpdateDetails from "../components/UpdateDetails.vue";
import DefaultCom from '../components/DefaultCom.vue';


const routes = [
  { path: '/', name: 'HomeCom', component: HomeCom },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/login', name: 'LogIn', component: LogIn },
  // dynamic routes
  { path: '/UpdateDetails/:id', name: 'UpdateDetails', component: UpdateDetails },
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
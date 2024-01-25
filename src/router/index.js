import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue';
import Budget from '@/views/Budget.vue';
import Home from '@/views/Home.vue';
import Send from '@/views/Send.vue';
import Exchange from '@/views/Exchange.vue';
import Loan from '@/views/Loan.vue';
import History from '@/views/History.vue';
import Settings from '@/views/Settings.vue';
import Transfer from '@/views/Transfer.vue';
import Sign_up from '@/views/Sign_up.vue';
import Sign_in from '@/views/Sign_in.vue';
import Forgot_password from '@/views/Forgot_password.vue';
import Bvn from '@/views/Bvn.vue';
import Airtime from '@/views/Airtime.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"welcome",
      component: Welcome
    },
    {
      path:"/budget",
      name:"budget",
      component: Budget
    },
    {
      path:"/home",
      name:"home",
      component: Home
    },
    {
      path:"/send",
      name:"send",
      component: Send
    },
    {
      path:"/exchange",
      name:"exchange",
      component: Exchange
    },
    {
      path:"/loan",
      name:"loan",
      component: Loan
    },
    {
      path:"/history",
      name:"history",
      component: History
    },
    {
      path:"/settings",
      name:"settings",
      component: Settings
    },
    {
      path:"/transfer",
      name:"transfer",
      component: Transfer
    },
    {
      path:"/sign_up",
      name:"sign_up",
      component: Sign_up
    },
    {
      path:"/sign_in",
      name:"sign_in",
      component: Sign_in
    },
    {
      path:"/forgot_password",
      name:"forgot_password",
      component: Forgot_password
    },
    {
      path:"/bvn",
      name:"bvn",
      component: Bvn
    },
    {
      path:"/airtime",
      name:"airtime",
      component: Airtime
    },
  ]
})

export default router

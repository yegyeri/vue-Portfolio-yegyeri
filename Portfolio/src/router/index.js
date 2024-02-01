import { createRouter, createWebHistory } from 'vue-router'

import homeView from '../views/homeView.vue'

import shopView from '../views/shopPage/shopView.vue'
import renesansPage from '../views/renaissance/renesansPage.vue'
import payment from '../views/payment/payView.vue'
import loginPage from '../views/loginPage/loginPage.vue'
import logIn from '../views/loginPage/pages/logIn.vue'
import signUp from '../views/loginPage/pages/singUp.vue'
import removePas from '../views/loginPage/pages/removePas.vue'
import labs from '../views/messengerLabs/LabsHome.vue'

import shopPageView from '../views/homePages/shopPageView.vue'
import renesansView from '../views/homePages/renesansView.vue'
import paymentView from '../views/homePages/paymentView.vue'
import loginView from '../views/homePages/loginView.vue'
import labsView from '../views/homePages/labsView.vue'
import hello from '../views/homePages/homeHello.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: homeView,
      children: [
        {
          path: '/home',
          component: hello
        },
        {
          path: '/home/shopView',
          component: shopPageView
        },
        {
          path: '/home/ArtGallery',
          component: renesansView
        },
        {
          path: '/home/paymentView',
          component: paymentView
        },
        {
          path: '/home/loginView',
          component: loginView
        },
        {
          path: '/home/labsView',
          component: labsView
        },
      ]
    },
    {
      path: '/shopPage',
      component: shopView
    },
    {
      path: '/renesans',
      component: renesansPage
    },
    {
      path:'/payment',
      component: payment
    },
    {
      path: '/login',
      component: loginPage,
      children: [
        {
          path: '/login/log',
          component: logIn
        },
        {
          path: '/login/sign',
          component: signUp
        },
        {
          path: '/login/remove',
          component: removePas
        }
      ]
    },
    {
      path: '/Labs',
      component: labs
    }
  ]
})

export default router

import { projectAuth } from '@/firebase/config'

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'



//Auth Gourd, If not logged in
const requireAuth=(to,from,next)=>{
  let user=projectAuth.currentUser
  console.log('Cureent User is '+user)
  if(!user)
  {
    next({name:'login'})
  }
  else
  {
    next()
  }
}

//if logged in
const isAuth=(to,from,next)=>{
  let user=projectAuth.currentUser
  if(user)
  {
    next({name:'home'})
  }
  else
  {
    next()
  }

}



const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: isAuth
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    beforeEnter: isAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

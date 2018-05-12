import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Test from '@/views/home/test'
import Login from '@/views/login/login'
import Admin from '@/views/admin/admin'
import Index from '@/views/index/index'
import Question from '@/views/question/question'
import Student from '@/views/student/student'
import Administor from '@/views/administor/administor'
import Self from '@/views/administor/self'

Vue.use(Router)

export default new Router({
  routes: [
    // 前台页面
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    // 后台页面
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin/',
      name: 'Admin',
      component: Admin,
      children: [
        { path: '', component: Index },
        { path: 'index', component: Index },
        { path: 'question', component: Question },
        { path: 'student', component: Student },
        { path: 'administor', component: Administor },
        { path: 'self', component: Self }
      ]
    }
  ]
})

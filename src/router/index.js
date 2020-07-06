import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/login'
import home from '../views/home/home'
import room from '../views/room/room'
import addroom from '../views/room/addroom'
import stus from '../views/stus/students'
import addstus from '../views/stus/addStudents'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login
    }, {
      path: '/home',
      name: '首页',
      component: home,
      children: [
        {
          path: '/home/room',
          name: '查看寝室',
          component: room,
        },
        {
          path: '/home/addroom',
          name: '添加寝室',
          component: addroom,
        },
        {
          path: '/students/allstudents',
          name: '查看学生',
          component: stus,
        },
        {
          path: '/students/addstu',
          name: '添加学生',
          component: addstus,
        }
      ]
    }
  ]
})

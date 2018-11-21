import Main from '@/components/main'


const myrouters = [
  {
    path: '/login.html',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home.html',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: '/home.html',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '首页',
        notCache: true,
        icon: 'md-home'
      },
      component: () => import('@/view/single-page/home')
    }]
  },
  {
    name:"test",
    path:"/test",
    component:Main,
    meta:{
      title:"{{测试路径}}"
    },
    children:[
      {
        path:'/test1.html',
        name:'test1',
        meta:{
          title:"{{测试一}}",
          access:['test:hello']
        },
        component:() => import('@/view/excel/upload-excel.vue')
      },{
        path:'/test2.html',
        name:'test2',
        meta:{
          title:"{{测试二}}",
          access:['test:hello1']
        },
        component:() => import('@/view/excel/upload-excel.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }]

export default myrouters;

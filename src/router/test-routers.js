import Main from '@/components/main'
import parentView from '@/components/parent-view'

export default [
  {
    path:"/test",
    name:"test",
    component:Main,
    meta:{
      title:"{{测试路由}}",
      icon:"md-home",
    },
    children:[
      {
        path:"/test.html",
        name:"test1",
        meta:{
          title:"测试一",
          access:['test:hello']
        },
        component:()=>import('@/view/excel/upload-excel.vue')
      },
      {
        path:"/test2.html",
        name:"test2",
        meta:{
          title:"测试2",
          access:['test:hello']
        },
        component:()=>import('@/view/excel/upload-excel.vue')
      },
    ]
  }
]

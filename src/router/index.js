import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Welcome from '@/components/Welcome'
import addStu from '@/components/addStu'
import addFangxiang from '@/components/addFangxiang'
import selectFangxiang from '@/components/selectFangxiang'
import editFangxiang from '@/components/editFangxiang'
import Login from '@/components/Login'
import addClasses from '@/components/addClasses'
import selectClasses from '@/components/selectClasses'
import selectStu from '@/components/selectStu'
import addSignStu from '@/components/stu/addSignStu'
import addMoreStu from '@/components/stu/addMoreStu'
import addType from '@/components/type/addType'
import addTest from '@/components/test/addTest'
import option1 from '@/components/test/option'
import options from '@/components/test/options'
import ask from '@/components/test/ask'


Vue.use(Router)

var router=new Router({
  routes: [
    {
      path: '/',
      component:Main,
      children:[

          {
            path:"",
            component:Welcome
          },
          {
            path:"/addStu",
            component:addStu
          },
          {
            path:"/addFangxiang",
            component:addFangxiang
          },
          {
              path:"/selectFangxiang",
              component:selectFangxiang
          },
          {
              path:"/editFangxiang/:fid",
              component:editFangxiang
          },
          {
            path:"/addClasses",
            component:addClasses

          },
          {
              path:"/selectClasses",
              component:selectClasses
          },
          {
              path:"/selectStu",
              component:selectStu
          },
          {
              path:"/addSignStu",
              component:addSignStu
          },
          {
              path:"/addMoreStu",
              component:addMoreStu
          },
          {
              path:"/addType",
              component:addType
          },
          {
              path:"/addTest",
              component:addTest,
              //三级路由
              children:[

                  {
                      path:"/option",
                      component:option1
                  },
                  {
                      path:"/options",
                      component:options
                  },
                  {
                      path:"/ask",
                      component:ask
                  }
              ]
          }

      ]
    },
      {
          path:"/login",
          component:Login
      }
  ]
})

router.beforeEach(function (to,from,next) {
    if(to.path=="/login"){
        next();
    }else{
        if(sessionStorage.login=="yes"){
            next();
        }else{
            next("/login");
        }
    }
})

export default router

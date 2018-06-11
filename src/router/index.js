import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/login/loginPage'
import Home from '@/components/homePage/home'
import emplyee_admin from '@/components/homePage/pages/staff'
import my_apply from "@/components/homePage/pages/myApply"
import menu_admin from "@/components/homePage/pages/menu_admin"
import child from "@/components/homePage/pages/child"
import applyPage from "@/components/homePage/pages/apply"
Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/login',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
        path:"emplyee_admin",
        name:emplyee_admin,
        component:emplyee_admin
      },
      {
        path:"my_apply",
        name:my_apply,
        component:my_apply
      },
      {
        path:"applyPage",
        name:applyPage,
        component:applyPage
      },{
        path:"menu_admin",
        name:menu_admin,
        component:menu_admin,
      //   children:[
      //     {
      //     path:"child",
      //     name:child,
      //     component:child,
      //   }
      // ]
      }, {
        path:"child",
        name:child,
        component:child,
      }]
    },
  ]
});
router.beforeEach((to,from,next)=>{
    if(to.name=="loginPage"){
       next()
    }else{
      let istrue=sessionStorage.getItem("key")
      if(istrue){
          next()
      }else{
        next("/login")
      }
    }
})

export default router;

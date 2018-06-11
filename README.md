#项目总结 
1. 这是电信通集团的长城宽带项目,主要功能是，员工账号进行管理，包括公司集团的员工入职、离职等信息的记录，业务审批，包括申请办公文具，出差报销等，以及其他一些后台常用功能。本项目主页是用vue-cli脚手架结合vuex做数据管理，以及vue-router和elementUi等
2. 路由的搭建
 * 首先对页面所需路由进行配置,如登录页和主页，主页下还包含一些了子路由,父路由跳转子路由时还涉及到了路由传参问题，本项目主要在link标签上使用:to="{path:'',query:{}}"的方法进行传参
    {
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
      }]
    },
  ]

}
 * 其次进入页面的时候用全局路由钩子做登录判断，如登录进入主页，如没有登录就进入登录页
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
3. 标志性的模块
    因是后台管理系统，所以本项目主要使用表格进行操作，表格的增删改查使用较多，以及更改数据对表格进行筛选
4. 本项目主要遇到的问题是数据筛选比较困难，现在学会了使用vuex的getter,我认为这是一种非常好的数据筛选方式


let Mock = require("mockjs");
let url=require("url");
let data =require("./data") 
let list = [
    {
        id: "1",
        tit: "组织权限管理",
        type:"group",
        children: [
            {id: "1-1", tit: "员工账号管理" ,type:"emplyee_admin"},
              { id: "1-2", tit: "菜单管理" ,type:"menu_admin"},
               { id: "1-3", tit: "工作组管理",type:"work_admin" }, 
               { id: "1-4", tit: "组织管理" ,type:"group_admin"},
               {id:"1-5",tit:"我的申请",type:"my_apply" }]
    },
    { id: "2", tit: "我的工作" },
    { id: "3", tit: "客户管理" },
    { id: "4", tit: "业务审批" }]
let infor = Mock.mock({
    'list|1-30': [{
        'id|+1': 0,
        'name': "@cname",
        "code|+1": "@zip",
        "phone": "15944888333",
        "email": "",
        "organization|1": [{name:"IT共享中心",prev:"北京电信通有限公司"},{name:"工程维护部本部",prev:"电信通后台2部"},{name:"人事行政部",prev:"电信通后台1部"},{name:"资产管理部",prev:"电信通后台1部"},{name:"企业行销",prev:"北京电信通有限公司"},{name:"专网事业部",prev:"北京电信通有限公司"}],
        "limit": "北京电信通",
        "time": '@date("yyyy-MM-dd")'
    }]

});
let user=[{username:"15946697671",password:"123"}]
module.exports = function (app) {
    app.get("/getUser",(req,res)=>{
        let path=url.parse(req.url,true);
        let {username,password}=path.query;
       
        let status=user.some(i=>{
            if(i.username==username&&i.password==password){
                return true
            }else{
                return false
            }
        });
        if(status){
            res.send({code:1,msg:"登陆成功"})
        }else{
            res.send({code:0,msg:"登陆失败"})
        }
    })
    app.get("/getData", (req, res) => {
        res.send(list)
    });
    app.get("/getInfor_1-1", (req, res) => {
        res.send(infor)
    })
    app.get("/getOrg",(req,res)=>{
        res.send(data)
    })
}

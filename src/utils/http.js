import axios from "axios"
let instance=axios.create({
    timeout:3000
})
instance.interceptors.request.use(function(config){
    return config
},function(err){
   return Promise.reject(err)
})
instance.interceptors.response.use(function(response){
    return response
},function(err){
    return Promise.reject(err)
})
let httpPlugin={
    install(Vue){
        //防止http在将来被更改
        Object.defineProperty(Vue.prototype,"$http",{value:instance})
    }
}
export default httpPlugin;
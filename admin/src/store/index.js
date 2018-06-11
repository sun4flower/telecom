import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
///console.log(Vue.$http)
export default new Vuex.Store({
    state: {
        data: "",
        infor: [],
        orgName: []
    },
    actions: {
        getData_A({ commit }) {
            axios.get("/getData").then(res => {
                commit("getData_M", res.data)
            })
        },
        getInfor_A({ commit }, cb) {
            axios.get("/getInfor_1-1").then(res => {
                commit("getInfor_M", res.data)
                cb()
            })
        },
        addInfor_A(store, item) {
            let arr = [...store.state.infor];
            var myDate = new Date();
            arr.some((i, index) => {
                if (i.id == item.id) {
                    arr[index] = item;
                    store.commit("addInfor_M", arr)
                } else {
                    if (i.organization.name == item.organization) {
                        item.organization = i.organization;
                        item.time = myDate.toLocaleDateString();
                        item.limit = "电信部"
                        store.commit("addInfor_M", item)
                        return true
                    }
                }
            })
        },
        delateInfor_A(store, id) {
            let arr = [...store.state.infor];
            let index = null;
            let status = arr.some((i, ind) => {
                if (i.id == id) {
                    index = ind;
                    return true;
                } else {
                    return false;
                }
            });
            if (status) {
                arr.splice(index, 1)
            }
            store.commit("delateInfor_M", arr)

        },
        compileInfor_A() {

        },
        getOrg_A({ state, commit }, cb) {
            if (state.orgName.length > 1) {
                cb()
            }
            axios.get("/getOrg").then(res => {
                commit("getOrg_M", res.data)
                cb()
            })
        }
    },
    mutations: {
        getData_M(state, data) {
            this.state.data = data
        },
        getInfor_M(state, data) {
            this.state.infor = data.list;
        },
        delateInfor_M(state, data) {
            this.state.infor = data;
        },
        compileInfor_M() {

        },
        addInfor_M(state, data) {
            if (data.length > 1) {
                state.infor = data;
            } else {
                let arr = state.infor;
                arr.push(data)
                state.infor = arr;
            }
        },
        getOrg_M(state, data) {
            state.orgName = data.orgs
        }
    },
    getters: {
        getName(state) {
            return (filter) => {
                if (filter) {
                    let res = state.orgName.filter(i => {
                        if (i.ORGNAME.indexOf(filter) > -1 || i.FORGNAME.indexOf(filter) > -1) {
                            return i
                        }
                    })
                    return res;
                } else {
                    return state.orgName
                }
            }
        },
        getStaff(state) {
            return (filter) => {
                for(var key in filter){
                    if(filter[key]!=""){
                        let res=state.infor.filter(i=>{
                            if(key=="organization"){
                                
                                if(i[key].name.indexOf(filter[key])>-1){
                                   return i;
                                }
                            }
                        })
                      return res;
                    }
                }
            }
        }
    },


})
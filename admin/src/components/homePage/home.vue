<template>
    <el-container>
        <el-header style="height:30px;fontSize:12px">
            北京电信通企业信息平台
        </el-header>

        <el-container>
            <el-aside width="159px">
                <el-row class="tac">
                    <el-col :span="12">
                        <h5><img src="../../../static/img/person.jpg"></h5>
                        <el-menu v-for="(item,index) in data" :key="index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" size="small">
                            <el-submenu :index="item.id">
                                <template slot="title" class="myclass">
                                    <span>{{item.tit}}</span>
                                </template>
                                <div v-for="(items,index) in item.children" :key="index">
                                    <el-menu-item :index="items.id"><router-link :to="{path:'/home/'+items.type}">{{items.tit}}</router-link></el-menu-item>
                                </div>
                            </el-submenu>

                        </el-menu>
                    </el-col>

                </el-row>
            </el-aside>
            <el-container>
                <el-main>
                   <router-view></router-view>
                   
                </el-main>
            </el-container>
        </el-container>
    </el-container>

</template>
<script>
import { mapState, mapActions } from "vuex"
import Store from "../../store/index"
import Staff from "./pages/staff"
export default {
    name: "",
    data() {
        return {
            show:Staff
        }
    },
    mounted() {
        this.getData_A()
    },
    methods: {
        ...mapActions(["getData_A"]),
        handleOpen(key, keyPath) {
            //console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            //console.log(key, keyPath);
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
    computed: {
        ...mapState(["data"]),
        ...mapState(["infor"])
    },
    components:{
        Staff
    }


}
</script>
<style scoped>
.el-header {
  height: 35px;
  line-height: 30px;
  background: linear-gradient(#7f99be,#375580);
  color: #fff;
}
.el-submenu{
    background: linear-gradient(#fff,#ccc);
}
.el-aside {
  box-sizing: border-box;
}
.el-col-12 {
  width: 100%;
}
.myclass{
    line-height: 30px;
}
</style>



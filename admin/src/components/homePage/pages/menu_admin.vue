<template>
    <div class="trees">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" node-key="index">
        </el-tree>
        <div class="childTree">
        <p>菜单名称</p>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="菜单名称">
                <el-input v-model="formInline.name" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="菜单代码">
                <el-input v-model="formInline.id" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="菜单显示名称">
                <el-input v-model="formInline.visName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="菜单显示顺序">
                <el-input v-model="formInline.rank" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="功能资源">
                <el-input v-model="formInline.function" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="是否为叶子菜单">
            <el-select v-model="formInline.menu" >
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
            </el-select>
              </el-form-item>

        </el-form>
        <el-form>
            <el-form-item class="submit">
                <el-button type="primary" @click="onSubmit" class="btns">保存</el-button>
            </el-form-item>
        </el-form>
    </div>

    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    data() {
        return {
            defaultProps: {
                children: 'children',
                label: 'tit'
            }, 
            formInline: {
                name: '',
                id:'',
                visName: '',
                rank:'',
                function:'',
                menu:''

            }
        }
    },
    computed: {
         ...mapState(["data"])
    },
    methods: {
        handleNodeClick(data) {
            var id=data.id.slice("-1")
            this.formInline= {
                name: data.tit,
                id:data.id,
                visName: data.tit,
                rank:id,
                function:"管理机构树",
                menu:'是'

            }
            console.log(data);
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style >

.trees{
    display: flex;
}
.childTree {
 padding-left:25px;
  flex: 1;
}
.el-form{
    padding: 10px;
}
</style>



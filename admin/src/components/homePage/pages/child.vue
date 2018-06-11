<template>
    <div class="childTree">
        <p>菜单名称</p>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="菜单名称">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="菜单代码">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="菜单显示名称">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="菜单显示顺序">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="功能资源">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="是否为叶子菜单">
            <el-select v-model="formInline.region" >
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
            </el-select>
              </el-form-item>

        </el-form>
        <el-form>
            <el-form-item class="submit">
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    data() {
        return {
            formInline: {
                user: '',
                region: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }, 
    mounted() {
        console.log(this.$route)
    },
    computed: {
         ...mapState(["data"])
    },
}
</script>
<style>
.childTree {
  margin: 10px;
  flex: 1;
}

</style>


<template>
    <div class="apply_box">
        <router-link :to="{path:'/home/applyPage',query:{id:1}}">
            <h4>发起更名流程名单</h4>
            <span>
                功能说明：发起更名流程名单
            </span>
            </router-link>
            <router-link :to="{path:'/home/applyPage',query:{id:2}}">
                <h4>发起过户流程名单</h4>
                <span>
                    功能说明：发起过户流程名单
                </span>
            </router-link>
            <router-link :to="{path:'/home/applyPage',query:{id:3}}">
                <h4>工程维护单</h4>
                <span>
                    功能说明：发起工程维护单
                </span>
            </router-link>
            <router-link :to="{path:'/home/applyPage',query:{id:4}}">
                <h4>其他类型工单</h4>
                <span>
                    功能说明：发起其他类型工单
                </span>
            </router-link>
            <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        myApply(id) {
           // this.$router.push({ path: `/home/${id}` })
        }
    }
}
</script>
<style>
.apply_box {
  display: flex;
  flex-wrap: wrap;
}
.apply_box > a {
  width: 30%;
  margin: 2px;
  border: 1px solid #ccc;
  height: 300px;
  position: relative;
}
.apply_box h4 {
  font-size: 25px;
  line-height: 300px;
  color: #ccc;
  text-align: center;
}
.apply_box span {
  position: absolute;
  bottom: 20px;
  display: block;
  width: 100%;
  text-align: center;
  color: #ccc;
}
</style>



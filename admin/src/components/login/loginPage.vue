<template>
  <div class="wrap">
      <section>
          <div class="box">
              <p>
                <span @click="changeFn(tab1,1)" :class="{active:active==1}">二维码登录</span>
                <span @click="changeFn(tab2,2)" :class="{active:active==2}">账号登录</span>
              </p>
              <div class="bot">
                <component :is="tabView"></component>
              </div>
          </div>
      </section>
  </div>
   
</template>

<script>
import Code from "./code"
import Phone from "./phone"
export default {
  name: 'HelloWorld',
  data () {
    return {
      active:1,
      tabView:"Code",
      tab1:"Code",
      tab2:"Phone"
    }
  },
  mounted(){
    
  },
  methods:{
    changeFn(i,index){
      this.tabView=i;
      this.active=index;
    }
  },
  components:{
    Code,Phone
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("../../../static/img/3.jpg");
  background-size: cover;
}
section{
  flex:1;
  position: relative;
  padding-top:40px;
  
}
.footer{
  height: 140px;
}
.box{
  width:400px;
  background: #fff;
  position: absolute;
  right: 120px;
  top:180px;
  height: 400px;
}
.box p{
  display: flex;
  height: 40px;
  line-height: 40px;
  justify-content: space-around;
  background: #ccc;
}
.box p span{
  text-align: center;
  display: block;
  width: 100%;height: 100%;
}
.active{
  background: #fff;
}
</style>

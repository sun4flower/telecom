<template>
    <div>
        {{data}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:""
        }
    },
    mounted(){
        this.data=this.$route.query.id
    }

}
</script>
<style>

</style>



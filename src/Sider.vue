<template>
    <transition name="fade">
        <div class="sider" v-if="visibled">
            <button @click="visibled = false">关闭</button>
            <slot/>
        </div>
    </transition>

</template>
<script>
    export default {
        name:'GuluSider',
        data(){
            return{
                visibled:true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sider{
        position: relative;
        > button{
            position: absolute;
            top:0;
            right:0;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: margin-left .5s;
    }
    .fade-enter, .fade-leave-to  {
        margin-left: -200px;
    }
</style>
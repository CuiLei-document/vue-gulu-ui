<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsPane',
        inject:['eventBus'],
        data(){
            return {
                active: false
            }
        },
        props:{
            name:{
                type:String|Number,
                required:true
            }
        },
        computed:{
          classes(){
              return {active: this.active}
          }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                return this.active = name === this.name;
            })
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes fade-pane {
        0%{opacity:0;transform:translateX(-100%)}
        100%{opacity:1;transform:translateX(0)}
    }
    .tabs-pane{
        padding: 16px;
        &.active{
            animation: fade-pane 250ms;
        }
    }
</style>
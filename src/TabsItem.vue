<template>
    <div class="tabs-item" @click="onClick" :class="classes" :disabled="disabled">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsItem',
        inject:['eventBus'],
        data(){
            return{
                active: false
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type:[String,Number],
                required:true
            }
        },
        computed:{
          classes(){
              return {
                  disabled: this.disabled,
                  active: this.active
              }
          }
        },
        created: function () {
            if(this.eventBus){
                    this.eventBus.$on('update:selected', (name) => {
                        return  this.active = name === this.name ;
                    })
            }
        },
        methods:{
            onClick(){
                if(this.disabled){return}
                 this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item{
        flex-shrink:0;
        padding: 0 1em;
        display:flex;
        align-items: center;
        height: 100%;
        cursor:pointer;
        &.active{
            color: blue;
        }
        &.disabled{
            color: grey;
            cursor: not-allowed;
        }
    }
</style>
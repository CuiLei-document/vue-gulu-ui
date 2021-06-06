<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue';

    export default {
        name: 'GuluTabsPane',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
         },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            console.log(11111111111111111)
           if(this.$children.length === 0){
               console && console.warn('tabs里面的子组件只能是 tabs-head和tabs-body')
           }
            console.log(2)
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuluTabsHead') {
                    console.log(3)
                    console.log(this.selected);
                    vm.$children.forEach((childVm)=>{
                      if(childVm.$options.name === 'GuluTabsItem' && childVm.$props.name === this.selected){
                          this.$nextTick(()=>{
                              this.eventBus.$emit('update:selected',this.selected,childVm)
                          })
                      }
                  })
                }
            })
            console.log(3)
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-pane {
    }
</style>
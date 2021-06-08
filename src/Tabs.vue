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
        methods:{
            checkChildren(){
                if (this.$children.length === 0) {
                    console && console.warn('tabs里面的子组件只能是 tabs-head和tabs-body')
                }
            },
            setSelectTab(){
                this.$children.forEach((vm) => {
                    if (vm.$options.name === 'GuluTabsHead') {
                        vm.$children.forEach((childVm) => {
                            if (childVm.$options.name === 'GuluTabsItem' && childVm.$props.name === this.selected) {
                                this.eventBus.$emit('update:selected', this.selected, childVm)
                            }
                        })
                    }
                })
            }
        },
        mounted() {
            this.checkChildren()
           this.setSelectTab()
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-pane {
    }
</style>
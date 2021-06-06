<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line"  ref="line"></div>
        <div class="wrapper-action">
            <slot name="action"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsHead',
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                const {width,height,left,top} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = width + 'px'
                this.$refs.line.style.left = left + 'px'
            })
        }
    }
</script>
<style lang="scss" scoped>
    $head-height:40px;
    $border-color: blue;

    .tabs-head{
        border-bottom: 1px solid #cbc9c9;
        height: $head-height;
        /*border:1px solid red;*/
        display:flex;
        justify-content: flex-start;
        position:relative;
        > .wrapper-action{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 16px;
        }
        > .line{
            transition: all 1s;
            position:absolute;
            left:0;
            bottom:0;
            border-bottom: 1px solid $border-color;
        }
    }
</style>
<template>
    <div class="tabs-head" ref="">
        <slot></slot>
        <div class="line"></div>
        <div class="wrapper-action">
            <slot name="action"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsHead',
        inject:['eventBus'],
        created: function () {
            this.eventBus.$on('update:selected', (item, vm) => {
                console.log(vm.$el);
            })
        }
    }
</script>
<style lang="scss" scoped>
    $head-height:40px;
    $border-color: blue;
    .tabs-head{
        height: $head-height;
        /*border:1px solid red;*/
        display:flex;
        justify-content: flex-start;
        position:relative;
        > .wrapper-action{
            margin-left: auto;
        }
        > .line{
            position:absolute;
            left:0;
            bottom:0;
            border-bottom: 3px solid $border-color;
            width: 100px;
        }
    }
</style>
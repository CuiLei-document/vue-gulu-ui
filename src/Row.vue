<template>
    <div class="row" :style="rowStyles" :class="rowClass">
        <slot/>
    </div>
</template>
<script>
    export default {
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value){
                    return ['left','right','center'].includes(value);
                }
            }
        },
        computed: {
            rowStyles() {
                let {gutter} = this
                return {marginRight: -gutter / 2 + 'px', marginLeft: -gutter / 2 + 'px'}
            },
            rowClass() {
                let {align} = this
                return {[`align-${align}`]:align}
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
    }
</style>
<template>
    <div class="col" :class="colClasses"
         :style="colStyles">
            <slot/>
    </div>
</template>

<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed:{
            colStyles(){
                let {gutter} = this
                return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}
            },
            colClasses(){
                let {span,offset} = this
                return {[`col-${span} offset-${offset}`]:span}
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        height: 100px;
        /*background: green;*/
        /*width: 50%;*/
        /*border: 1px solid red;*/
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-right: ($n / 24) * 100%;
            }
        }
    }
</style>
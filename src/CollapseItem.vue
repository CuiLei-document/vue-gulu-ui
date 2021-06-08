<template>
    <div class="collapseItem">
        <div class="title" @click="open = !open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'GuluCollapseItem',
        props:{
            title:{
                type:String,
                required:true
            }
        },
        data(){
            return {
                open:false
            }
        }
    }
</script>
<style lang="scss" scoped>
    $border-radius: 4px;
    $border-color: grey;
    .collapseItem{
        >.title{
            border: 1px solid $border-color;
            min-height:32px;
            margin-left: -1px;
            margin-right: -1px;
            margin-top: -1px;
            display: flex;
            align-items: center;
            padding: 0 8px;
           // background: lighten($border-color,8%);
            &:first-child{
                > .title{
                    border-top-left-radius: $border-radius;
                    border-top-right-radius: $border-radius;
                }
            }
            &:last-child{
                >.title{
                    border-bottom-right-radius: $border-radius;
                    border-bottom-left-radius: $border-radius;
                }
                border-bottom: none;
            }
        }
        >.content{
            padding: 8px;
        }
    }
</style>
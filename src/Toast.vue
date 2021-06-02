<template>
    <transition name="fade">
        <div class="toast" v-if="autoClose">
            <slot></slot>
            <span class="line"></span>
            <span class="close" v-if="closeButton" @click="onCloseButton">
                {{closeButton.text}}
            </span>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'GuluToast',
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDey:{
                default:50
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {
                        text:'关闭',
                        callback:function(toast){
                            toast.close()
                        }
                    }
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDey * 1000)
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onCloseButton(){
                this.close()
                this.closeButton.callback()
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $border-radius: 4px;
    $toast-height: 40px;
    $box-shadow: 0 0 3px 0px rgba(0,0,0,0.5);
    $toast-bg: rgba(0,0,0,0.75);
    .toast {
        font-size: $font-size;
        position: fixed;
        top:0;
        left: 50%;
        transform: translateX(-50%);
        height:$toast-height;
        padding: 0 16px;
        line-height:1.8;
        display: flex;
        align-items: center;
        border-radius: $border-radius;
        background: $toast-bg;
        color: white;
        box-shadow: $box-shadow;
        > .line{
            height: 100%;
            border-left: 1px solid red;
            margin-left: 16px;
        }
    }

    .close{
        margin-left: 16px;
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 3s;
    }
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
</style>
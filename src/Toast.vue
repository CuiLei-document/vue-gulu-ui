<template>
    <transition name="fade" >
        <div class="wrapper-toast" :class="{[`wrapper-toast-${classPrefix}`]:classPrefix}">
            <div class="toast" v-if="autoClose" ref="toast" >
                <div class="wrapper">
                    <slot v-if="!enableHtml"></slot>
                    <div v-else v-html="$slots.default[0]"></div>
                </div>
                <span class="line" ref="line"></span>
                <span class="close" v-if="closeButton" @click="onCloseButton">
                {{closeButton.text}}
            </span>
            </div>
        </div>

    </transition>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDey: {
                default: 5
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            classPrefix: {
                type: String,
                validator(value) {
                    return ['left', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.updateStyle()
            this.autoLineStyle()
        },
        methods: {
            autoLineStyle() {
                this.$nextTick(() => {
                    let {height} = this.$refs.toast.getBoundingClientRect()
                    this.$refs.line.style.height = height + 'px'
                })
            },
            updateStyle() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDey * 1000)
                }
            },

            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log() {
                console.log('测试')
            },
            onCloseButton() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $border-radius: 4px;
    $toast-min-height: 40px;
    $box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.5);
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade-1 {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
    @keyframes fade-2 {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateX(0)
        }
    }
    @keyframes fade-3 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .wrapper-toast{
        position:fixed;
        left: 50%;
        transform: translateX(-50%);
        &-top {
            top: 0;
            > .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: fade-2 1s;
            }
        }

        &-bottom {
            bottom: 0;
            > .toast{
                animation: fade-1 1s;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        &-middle {
            animation: fade-3 1s;
            top: 50%;

        }
    }
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        padding: 0 16px;
        line-height: 1.8;
        display: flex;
        align-items: center;
        border-radius: $border-radius;
        background: $toast-bg;
        color: white;
        box-shadow: $box-shadow;

        > .line {
            height: 100%;
            border-left: 1px solid red;
            margin-left: 16px;
        }

        > .wrapper {
            padding: 6px 0;
        }

        .close {
            margin-left: 16px;
            flex-shrink: 0;
        }

        .fade-enter-active, .fade-leave-active {
            transition: all 3s;
        }

        .fade-enter, .fade-leave-to {
            opacity: 0;
        }


    }


</style>
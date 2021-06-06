<template>
    <div class="wrapper" :class="onToastPosition">
        <div class="toast" ref="toast">
            <div class="toast-wrapper">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onCloseButton">
            {{closeButton.text}}
        </span>
        </div>
    </div>

</template>
<script>
    export default {
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 1,
                validator(value){
                    return value === false || typeof value === 'number';
                }
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
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            onToastPosition() {
                return [`toast-position-${this.position}`]
            }
        },
        mounted() {
            this.execAutoClose()
            this.updateStyles()
        },
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    let {height} = this.$refs.toast.getBoundingClientRect()
                    this.$refs.line.style.height = height + 'px'
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
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
    $toast-min-height: 40px;
    $box-shadow-color: 0 0 3px 0 #666;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $box-shadow-color: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    $border-radius: 4px;
    @keyframes fade-1 {
        0% {
            transform: translateY(100%)
        }
        100% {
            transform: translateY(0)
        }
    }
    @keyframes fade-2 {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }
    @keyframes fade-3 {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.toast-position-top {
            top: 0;
            .toast {
                animation: fade-3 1s;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }

        &.toast-position-bottom {
            bottom: 0;
            .toast {
                animation: fade-1 1s;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        &.toast-position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            .toast{
            animation: fade-2 1s;
            }
        }
    }

    .toast {
        font-size: 14px;
        min-height: $toast-min-height;
        border-radius: $border-radius;
        display: flex;
        align-items: center;
        padding: 0 16px;
        background: $toast-bg;
        box-shadow: $box-shadow-color;
        color: white;

        &-wrapper {
            padding: 6px 0;
        }

        > .line {
            height: 100%;
            border: 1px solid #666;
            margin: 0 16px;
        }

        > .close {
            flex-shrink: 0;
        }

    }
</style>
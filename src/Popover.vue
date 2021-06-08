<template>
    <div class="popover" @click="onClick" ref="popover">
        <div :class="{[`position-${position}`]:true}" ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
             <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'GuluPopover',
        data() {
            return {
                visible: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validators(value) {
                    return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let {width, height, left, top} = triggerWrapper.getBoundingClientRect()
                let {height: height2} = contentWrapper.getBoundingClientRect()
                let x = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + height + window.scrollY
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        left: left + window.scrollX,
                        top: top + (height - height2) / 2 + window.scrollY
                    }
                }
                contentWrapper.style.left = x[this.position].left + 'px'
                contentWrapper.style.top = x[this.position].top + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.contentWrapper) {
                    if (this.$refs.contentWrapper.contains(e.target)) {
                        return
                    } else {
                        this.onClose()
                    }
                } else {
                    this.onClose()
                }
            },
            open() {
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClose() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)

            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    console.log('切换visible')
                    if (this.visible === true) {
                        this.onClose()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0 16px;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0.5em 1em;
        fliter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
        background: white;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);

            &::before, &::after {

                left: 10px;
            }

            &::before {
                top: 100%;
                border-top-color: #000000;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                bottom: 100%;
                border-bottom-color: #000000;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                left: 100%;
                top: 50%;
                transform: translateY(-50%)
            }

            &::before {
                left: 100%;
                border-left-color: #000000;
            }

            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            transform: translateX(100%);
            margin-left: 10px;

            &::before, &::after {
                right: 100%;
                top: 50%;
                transform: translateY(-50%)
            }

            &::before {
                right: 100%;
                border-right-color: #000000;
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
</style>
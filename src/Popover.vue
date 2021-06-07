<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
        methods: {
            xxx: function () {
                this.visible = !this.visible
                if (this.visible === true) {
                    this.$nextTick(() => {
                        let {contentWrapper} = this.$refs;
                        document.body.appendChild(contentWrapper)
                        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        console.log(width, height, top, left);
                        contentWrapper.style.left = left+ window.scrollX + 'px'
                        contentWrapper.style.top = top + window.scrollY + 'px'
                        let eventHandler = () => {
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    }, 1000)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
        > .content {
        }
    }
</style>
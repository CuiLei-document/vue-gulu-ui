<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
            positionContent() {
                let {contentWrapper} = this.$refs;
                document.body.appendChild(contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                contentWrapper.style.left = left + window.scrollX + 'px'
                contentWrapper.style.top = top + window.scrollY + 'px'
            },
            closeElement() {
                // if (this.$refs.triggerWrapper.contains(event.target)) {
                //     this.visible = !this.visible
                //     if (this.visible !== true) {
                //         return;
                //     }
                //     this.$nextTick(() => {
                //         this.positionContent()
                //         let eventHandler = (e) => {
                //             if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
                //                 return
                //             } else {
                //                 this.visible = false
                //                 document.removeEventListener('click', eventHandler)
                //             }
                //         }
                //         document.addEventListener('click', eventHandler)
                //     })
                // }

            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    this.visible = !this.visible
                    console.log('切换visible')
                    if ( this.visible === true ) {
                        setTimeout(() => {
                            document.addEventListener('click', () => {
                                this.visible = false
                                console.log('点击body 关闭 visible')
                            })
                        })
                    }
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
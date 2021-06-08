<template>
    <div class="popover" @click="onClick" ref="popover">
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
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + 'px'
                this.$refs.contentWrapper.style.top = top + 'px'
            },
            onClickDocument (e) {
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
            open(){
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClose(){
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)

            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    console.log('切换visible')
                    if (this.visible === true) {
                       this.onClose()
                    }else{
                        this.open()
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
<template>
    <div class="col" :class="colClass"
         :style="colStyle"
    >
        <slot></slot>
    </div>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)

        let volida = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                volida = false
            }
        })
        return volida
    }
    export default {
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            phone: {
                type: Object,
                validator(value){
                    let keys = Object.keys(value)
                    let volid = true
                    keys.forEach((key)=>{
                        if(!['span','offset'].includes(key)){
                            volid = false
                        }
                    })
                    return volid
                }
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset, phone} = this
                console.log(phone);
                let phoneClass = []
                if(phone){
                    phoneClass = [`col-phone-${phone.span}`]
                }
                return {
                    ...(phoneClass),
                    [`col-${span}`]: span,
                    [`offset-${offset}`]: offset,
                }
            },
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        border: 1px solid red;
        /*width: 50%;*/
        height: 100px;
        padding: 0 10px;
        /*background: grey;*/
        $class-prefix: col-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (max-height: 576px) {
            $class-prefix: col-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>
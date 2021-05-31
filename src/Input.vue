<template>
    <div class="wrapper">

        <input type="text" :class="{'error':error}" :Value="value" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <Icon name="error" class="wrapper-icon"></Icon>
            <span class="wrapper-text">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './Icon'
    export default {
        components:{Icon},
        name: 'input',
        props: {
            value: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-hover-color: #666;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $border-radius: 4px;
    $red: #F1435D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child){
            margin-right: 0.5em;
        }
        > input {
            height: $height;
            border-radius: $border-radius;
            border: 1px solid $border-color;
            font-size: inherit;
            padding: 0 6px;

            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }

            &:hover {
                border-color: $border-hover-color;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }

            &.error {
                border-color: $red;
            }
        }
        &-icon{
            fill:red;
        }
        &-text{
            color:red;
        }
    }
</style>
<template>
        <button  class="g-button " :class="{[`icon-${classPrefix}`]:classPrefix}" >
            <g-icon v-if="icon" class="icon" :name="icon"></g-icon>
            <div class="content">
                <slot />
            </div>
        </button>
</template>
<script>
 export default{
    // props:['icon','classPrefix']
     props:{
         icon:{
             type:String
         },
         classPrefix:{
             type:String,
             default:'left',
             validator(value){
                 return value === 'right' || value === 'left'
             }
         }
     }
 }

</script>

<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        padding: 0 1em;
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items:center;
        vertical-align: middle;
        &:hover{
            border-color: var(--border-color);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        & > .icon{
            order: 1;
            margin-top: 1px;
            margin-right: .1em;
        }
        & > .content{
            order: 2;
        }
        &.icon-right{
            > .icon{
                order: 2;
                margin-right: 0;
                margin-left: .1em;
                margin-top: 1px;
            }
            > .content{
                order: 1;
            }
        }
    }

</style>
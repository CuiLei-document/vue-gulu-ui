<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default{}
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $box-shadow-color: 0 0 3px 0 #666;
    $toast-bg:rgba(0,0,0,0.75);
    $box-shadow-color: 0px 0px 3px 0px rgba(0,0,0,0.50);
    $border-radius: 4px;
    .toast{
        font-size:14px;
        height: $toast-height;
        border-radius: $border-radius;
        display: flex;
        align-items: center;
        padding: 0 16px;
        position: fixed;
        top:0;
        left: 50%;
        transform: translateX(-50%);
        background: $toast-bg;
        box-shadow:$box-shadow-color;
        color: white;
    }
</style>
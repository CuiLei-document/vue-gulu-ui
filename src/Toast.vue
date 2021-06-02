<template>
    <div class="toast">
        <slot/>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast'
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $border-radius: 4px;
    $toast-height: 40px;
    $box-shadow: 0 0 3px 0px rgba(0,0,0,0.5);
    $toast-bg: rgba(0,0,0,0.75);
    .toast {
        font-size: $font-size;
        position: fixed;
        top:0;
        left: 50%;
        transform: translateX(-50%);
        height:$toast-height;
        padding: 0 16px;
        line-height:40px;
        border-radius: $border-radius;
        background: $toast-bg;
        color: white;
        box-shadow: $box-shadow;
    }
</style>
<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluCollapse'
    }
</script>
<style lang="scss" scoped>
    $border-radius: 4px;
    $border-color: grey;
    .collapse{
        border: 1px solid $border-color;
    }
</style>
<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'GuluTabsBody',
        inject:['eventBus'],
        created() {

        }
    }
</script>
<style lang="scss" scoped>

</style>
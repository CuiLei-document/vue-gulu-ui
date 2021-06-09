<template>
    <div>
        <g-button loading>按钮</g-button>
        <g-button icon="settings">按钮</g-button>
        <g-button >按钮</g-button>
    </div>
</template>
<script>
    import Button from "../../../src/button";
    export default{
        components:{
            'g-button': Button
        }
    }
</script>

<template>
    <div>
        <g-button >正常按钮</g-button>
        <g-button loading>正常按钮</g-button>
        <g-button icon="settings">按钮</g-button>
        <g-button disabled>正常按钮</g-button>
        <pre>
            <code>
                {{content}}
            </code>
        </pre>
    </div>
</template>
<script>
    import Button from "../../../src/button";
    import '../../../src/svg.js'
    export default{
        components:{
            'g-button': Button
        },
        data(){
            return{
                content:`
<g-button >正常按钮</g-button>
<g-button loading>正常按钮</g-button>
<g-button icon="settings">按钮</g-button>
<g-button disabled>正常按钮</g-button>
                `
            }
        }
    }
</script>
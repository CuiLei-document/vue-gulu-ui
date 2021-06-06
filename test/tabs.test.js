const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsHead from '../src/TabsHead.vue';
import TabsBody from '../src/TabsBody.vue';
import TabsItem from '../src/TabsItem.vue';
import TabsPane from '../src/TabsPane.vue';
Vue.component('g-tabs',TabsHead)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在', () => {
        expect(Tabs).to.exist
    })
    it('子组件只能接收 tabs-head和 tabs-body', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-tabs  selected="finance">
                <g-tabs-head>
                    <g-tabs-item name="woman"> 美女</g-tabs-item>
                    <g-tabs-item name="finance">财经</g-tabs-item>
                    <g-tabs-item name="sports">体育</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="woman">美女资讯</g-tabs-pane>
                    <g-tabs-pane name="finance">财经频道</g-tabs-pane>
                    <g-tabs-pane name="sports">体育解说</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
        `
        let vm = new Vue({
            el:div
        })
        vm.$nextTick(()=>{
            console.log(vm.$el.outerHTML);
            done()
        })
    })
})
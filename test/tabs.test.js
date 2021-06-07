const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsHead from '../src/TabsHead.vue';
import TabsBody from '../src/TabsBody.vue';
import TabsItem from '../src/TabsItem.vue';
import TabsPane from '../src/TabsPane.vue';

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在', () => {
        expect(Tabs).to.be.ok
    })
    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <g-tabs selected="finance">
            <g-tabs-head>
              <g-tabs-item name="woman"> 美女 </g-tabs-item>
              <g-tabs-item name="finance"> 财经 </g-tabs-item>
              <g-tabs-item name="sports"> 体育 </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
              <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
              <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
    `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            const item = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(item.classList.contains('active')).to.be.true;
            done()
        })
    })
})
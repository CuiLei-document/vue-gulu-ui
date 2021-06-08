const expect = chai.expect;

import Vue from 'vue'
import Tabs from '../src/Tabs.vue'
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

describe('TabsItem',()=>{
    it('存在',()=>{
        expect(TabsItem).to.exist
    })
    it('接受 name',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                name:'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接受 disabled',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.spy()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})
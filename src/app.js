import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-button', Button);
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
        }
    }
})

import chai from 'chai';

const expect = chai.expect;
// 单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useSettings = vm.$el.querySelector('use')
    console.log(useSettings);
    expect(useSettings.getAttribute('xlink:href')).to.eq('#i-settings');
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            loading: true,
            icon:'settings',

        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            classPrefix:'right'
        }
    })
    vm.$mount(div)
    const svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'left'
        }
    })
    vm.$mount()
    vm.$on('click',function(){
        expect(1).to.eq(1)
    })
    const button = vm.$el
    button.click()
    console.log(button);
}
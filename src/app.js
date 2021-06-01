import './svg'
import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from "./Input.vue";
import Row from './Row.vue'
import Col from './Col.vue'
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-button', Button);
Vue.component('g-input',Input)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message:'hi'
        }
    },
    created(){
      setTimeout(()=>{
          let event = new Event('change')
          let inputElement = this.$el.querySelector('input')
          inputElement.dispatchEvent(event)

      },3000)
    },
    methods:{
      updateInput(e){
          console.log(e);
      }
    }
})

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies)
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
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor  = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    vm.$mount(div)
    const svg = vm.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svg)
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
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
    expect(order).to.equal('2')
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
    let spy = chai.spy(function(){})
    vm.$on('click',spy)
    const button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}
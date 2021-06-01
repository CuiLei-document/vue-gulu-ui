const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在', () => {
        expect(Row).to.be.ok
    })

    it('接收 gutter 属性', () => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="10">
                <g-col span="12" ></g-col>
                <g-col span="12" ></g-col>
            </g-row>>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const clos = vm.$el.querySelectorAll('.col');
            expect(getComputedStyle(clos[0]).paddingLeft).to.eq('10px')
        },0)
        vm.$el.remove()
        vm.$destroy()

    })
    it('接收 align 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'left'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('flex-start')
        vm.$el.remove()
        vm.$destroy()
    })
})
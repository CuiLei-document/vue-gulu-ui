const expect = chai.expect;
import Vue from 'vue';
import Popover from "../src/Popover";

Vue.component('g-popover', Popover)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在', () => {
        expect(Popover).to.be.ok
    })

    it('接受 position', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-popover position="bottom" ref="p">
                <template slot="content">
                    弹出内容
                </template>
                <button>点我</button>
            </g-popover>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                expect(vm.$refs.p.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true;
                done()
            })
        })
    })
    xit('接受 triggle', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-popover trigger="hover">
                <template slot="content" ref="a">
                    内容    
                </template>
                <button>点击</button>
            </g-popover>
        `
        const vm = new Vue({
            el:div
        })
        const mouseenter = new Event('mouseenter')
        vm.$el.dispatchEvent(mouseenter)
        vm.$nextTick(()=>{
            setTimeout(()=>{
                console.log(vm.$refs.a);
                done()
            })
        })
    })
})
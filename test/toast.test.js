const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/Toast";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', function () {
    it('存在', () => {
        expect(Toast).to.be.ok
    })
    describe('props', () => {
        it('接受 autoClose 属性', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            const element = vm.$el
            vm.$on('close',()=>{
                expect(document.body.contains(element)).to.eq(false)
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('接受 closeButton',()=>{
            const callback = sinon.spy()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    closeButton:{
                        text:'关闭吧',
                        callback
                    }
                }
            }).$mount()
            const closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
            vm.$el.remove()
            vm.$destroy()
        })
        it('接受 enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{enableHtml:true}
            })
            vm.$slots.default = [`<strong id="hi">hi</strong>`]
            vm.$mount()
            const strong = vm.$el.querySelector('#hi')
            expect(strong).to.exist
        })
        it(' 接受 position',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('toast-position-bottom')).to.eq(true)
        })
    })
})
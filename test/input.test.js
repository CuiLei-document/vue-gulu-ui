const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/FromInput'

describe('Input', () => {

    it('存在', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '321'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('321')
        })


        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')

            expect(inputElement.readOnly).to.equal(true)
        })

        it('接收 error', () => {
            const vm = new Constructor({
                propsData: {
                    error: '接收两个字'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorElement = vm.$el.querySelector('.wrapper-text')
            expect(errorElement.innerText).to.equal('接收两个字')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change,input,focus,blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor().$mount()
                let callback = sinon.spy()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(event,'target',{
                    value:{value:'hi2'},
                })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi2')
            })

        })
    })
})
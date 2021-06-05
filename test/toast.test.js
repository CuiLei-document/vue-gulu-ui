const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/Toast";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', function() {
    it('存在',()=>{
        expect(Toast).to.be.ok
    })

    describe('props',()=>{
        it('接收 autoClose',(done)=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autoClose: true,
                    autoCloseDey:2
                }
            }).$mount(div)
            setTimeout(()=>{
                console.log(document.body.contains(vm.$el));
                expect(document.body.contains(vm.$el)).to.equal(false)
                done()
            },1000)

        })
    })
})
import Toast from './Toast'
export default{
    install(Vue,options){
        Vue.prototype.$toast = function(message,toastOtions){
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
               propsData: toastOtions
            })
            toast.$slots.default = [message]
            console.log(toast);
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
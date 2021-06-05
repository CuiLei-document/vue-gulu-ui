import Toast from "./Toast";



function createToast({Vue, messages, propsData, onClose}) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
        propsData
    })
    toast.$slots.default = [messages]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default {
    install: function (Vue, options) {
        Vue.prototype.$toast = function (messages, toastOptions) {

            if (currentToast) {
                currentToast.close()
            }

            currentToast =  createToast({
                Vue, messages, propsData: toastOptions,onClose:()=>{
                    currentToast = null
                }
            })
        }
    }
}
import Toast from "./Toast";

export default{
    install: function(Vue,options){
        Vue.prototype.$toast = function(messages){
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor()
            toast.$slots.default = [messages]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
import './svg'
import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from "./Input.vue";
import Row from './Row.vue'
import Col from './Col.vue'
import Layout from './layout.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Sider from './Sider.vue';
import Toast from './Toast.vue'
import plugin from "./plugin";
Vue.component('g-toast', Toast)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-button', Button);
Vue.component('g-input', Input)
Vue.use(plugin)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message: 'hi'
        }
    },

    created() {

    },
    methods: {
       showToast(){
           this.$toast(`你的智商该充值了`,{
               classPrefix:'middle',
                enableHtml:false,
               closeButton:{
                    text:'充值',
                   callback(){
                        console.log('充值已经到位')
                   }
               },
               autoClose:true,

           })
       }
    }
})


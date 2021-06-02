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
        // setTimeout(() => {
        //     let event = new Event('change')
        //     let inputElement = this.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        // }, 3000)
    },
    methods: {
        updateInput(e) {
            console.log(e);
        }
    }
})


import './svg'
import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import FromInput from "./FromInput.vue";
import Row from './Row.vue'
import Col from './Col.vue'
import Layout from './layout.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Sider from './Sider.vue';
import Toast from './Toast.vue'
import plugin from "./plugin";
import Tabs from './Tabs.vue'
import TabsHead from './TabsHead.vue';
import TabsBody from './TabsBody.vue';
import TabsItem from './TabsItem.vue';
import TabsPane from './TabsPane.vue';
import Popover from './Popover.vue';

Vue.component('g-popover',Popover)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
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
Vue.component('g-from-input', FromInput)
Vue.use(plugin)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message: 'hi',
            selectedTab:'sports'
        }
    },

    created() {
    },
    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast(`小兄弟你的网费欠${parseInt(Math.random() * 100)}`,
                {
                    position: position,
                    enableHtml: true,
                    autoClose: 5
                },
            )
        }
    }
})


import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { ValidationProvider, extend } from 'vee-validate';

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

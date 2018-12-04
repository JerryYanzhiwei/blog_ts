import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import 'swiper/dist/css/swiper.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/styles/main.scss'

Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch()
library.add(fas, far)

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/vuex/store'
import axios from 'axios'
import qs from 'qs'
import http from '@/libs/http'
import api from '@/libs/api'
import common from '@/assets/js/common'

Vue.use(common)

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

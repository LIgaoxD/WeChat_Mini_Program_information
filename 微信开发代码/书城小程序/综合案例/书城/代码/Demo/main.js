import Vue from 'vue'
import App from './App'
import request from 'common/request.js'
Vue.config.productionTip = false
Vue.prototype.$request = request
App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()

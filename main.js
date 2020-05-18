import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
import httpInterceptor from 'common/http.interceptor.js'
Vue.use(uView, httpInterceptor);

const app = new Vue({
	...App
})
app.$mount()

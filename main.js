import Vue from 'vue'
import App from './App'
import {router} from './routers/router.js'

Vue.config.productionTip = false

Vue.use(router);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

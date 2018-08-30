import Vue from 'vue'
import Router from 'vue-router'
import adminRouter from './admin/router.js'
import mobileRouter from './mobile/mobileRouter.js'

Vue.use(Router)

var router = adminRouter.concat(mobileRouter)
export default new Router({
  routes: router
})
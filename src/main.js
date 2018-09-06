import Vue from 'vue'
import $ from 'jquery'
import App from './App.vue'
import store from './assets/store/index.js'
import ElementUI from 'element-ui'
import router from './assets/router/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 路由发生改变
router.beforeEach((to, from, next) => {

  if (to.path == '/web/index' || to.path == '/web/blog') {
    next()
  } 

  if (store.state.token) {
    store.state.responsiveMenuIsShow = false
    if (to.path === '/login') {
      next('/web_admin/article_manage')
    } else if (to.path === '/web_admin/edit_article' || to.path === '/web_admin/add_articles') {
      UE.delEditor('editor')
      next()
    }
    if (to.path === '/web_admin/user_manage') {
      store.state.navClassId = 1
    } else if (to.path === '/web_admin/index') {
      store.state.navClassId = 2
    } else if (to.path === '/web_admin/edit_article' || to.path === '/web_admin/add_articles' || to.path === '/web_admin/article_manage') {
      store.state.navClassId = 3
    } else if (to.path === '/web_admin/edit_music' || to.path === '/web_admin/add_music' || to.path === '/web_admin/music_manage') {
      store.state.navClassId = 4
    } else if (to.path === '/web_admin/soup_manage' || to.path === '/web_admin/add_soup' || to.path === '/web_admin/edit_soup') {
      store.state.navClassId = 5
    } 
    next()
  }
  next()
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})


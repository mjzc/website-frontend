import Vue from 'vue'
import App from './App.vue'
import store from './assets/store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './assets/router/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 路由发生改变
router.beforeEach((to, from, next) => {

  if (to.path == '/web/index' || to.path == '/web/blog' || to.path == '/resume') {
    next()
    return
  }
  let isLogin = store.state.token ? true : false
  if (!isLogin) {
    if (to.path !== '/login') {
      return next({path: '/login'})
    }else {
      next()
    }
  } else {
    if (to.path === '/login') {
      return next({path: '/web_admin'})
    }
    store.state.responsiveMenuIsShow = false
    // 处理nav
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
    }  else if (to.path === '/web_admin/singer_manage' || to.path === '/web_admin/add_singer' || to.path === '/web_admin/edit_singer') {
      store.state.navClassId = 6
    } 
    next()
  }
    
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})


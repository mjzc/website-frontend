<template>
   <div class="top-nav">
        <span>网页管理系统</span>
        <span class="responsive-toWeb-icon" @click="$router.push('/web/index')"><i class="el-icon-mobile-phone"></i></span>
        <span class="responsive-exit-icon" @click="logOut"><i class="el-icon-back"></i></span>
        <span @click="responsiveIconEvent" class="responsive-icon"><i class="el-icon-menu"></i></span>
        <button class="toWeb-btn" @click="$router.push('/web/index')"><i class="el-icon-mobile-phone"></i> 前往前台</button>
        <button class="exit-btn" @click="logOut"><i class="el-icon-back"></i> 退出登录</button>
    </div>
</template>

<script>
import store from '../../store/index'
import router from '../../router/index'
export default {
  name: 'head',
  data: function () {
      return {
          
      }
  },
  methods: {
      logOut: function () {
          store.dispatch('Logout').then(() => {
              router.replace('/login')
          })
      },
      responsiveIconEvent: function () {
          store.state.responsiveMenuIsShow = store.getters.getResponsiveMenuState ? false : true
      }
  }

}
</script>

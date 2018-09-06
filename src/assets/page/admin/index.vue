<template>
    <div class="admin-page">
        <top-mine-head></top-mine-head>
        <div class="middle-content">
            <left-mine-nav></left-mine-nav>
            <div class="right-menu">
            <div class="right-menu-nav">
                 <span @click="$router.push('/web_admin/index')"><i class="el-icon-document"></i>&nbsp;首页</span>
                    <span>/ {{ $route.name }}</span>
            </div>
            <div class="nav-page">
                <div class="page-name">
                    <i class="el-icon-document"></i><span>{{ $route.name }}</span>
                </div>

                <router-view></router-view>
                           
            </div>
        </div>
        </div>
    </div>
</template>

<script src="https://cdn.bootcss.com/element-ui/2.0.11/index.js"></script>
<script>
import leftNav from "@/components/admin/leftNav.vue";
import topHead from "@/components/admin/topHead.vue";

export default {
  name: "adminIndex",
  data: function() {
    return {};
  },
  components: {
    "top-mine-head": topHead,
    "left-mine-nav": leftNav
  }
};
</script>
<style>
@import url('https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css');
@import url('https://cdn.bootcss.com/element-ui/2.0.11/theme-chalk/index.css');
@import url('../../styles/admin.css');
</style>

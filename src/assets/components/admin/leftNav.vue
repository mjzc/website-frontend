<template>
<div class="menus">
      <div class="left-menu">
        <div class="left-manu-nav">
            <i class="el-icon-more"></i>
            <span>&nbsp;&nbsp;&nbsp;菜单列表</span>
        </div>
        <div class="nav-class">
            <div class="class-content">
                <div class="class-name">
                    <i class="el-icon-setting"></i>
                    基本设置
                </div>
                <ul>
                    <li>
                        <i class="el-icon-caret-right"></i> 
                        <router-link to="/web_admin/user_manage" :class="{'active':$store.state.navClassId == 1}">用户设置</router-link>
                    </li>
                </ul>
            </div>
            <div class="class-content">
                <div class="class-name">
                    <i class="el-icon-tickets"></i> 
                    内容管理
                </div>
                <ul>
                    <li>
                        <i class="el-icon-caret-right"></i> 
                        <router-link to="/web_admin/index" :class="{'active':$store.state.navClassId == 2}">首页管理</router-link> 
                    </li>
                    <li>
                        <i class="el-icon-caret-right"></i> 
                        <router-link to="article_manage" :class="{'active':$store.state.navClassId == 3}">博客管理</router-link>
                    </li>
                    <li>
                        <i class="el-icon-caret-right"></i> 
                        <router-link to="music_manage" :class="{'active':$store.state.navClassId == 4}">音乐管理</router-link>
                    </li>
                    <li>
                        <i class="el-icon-caret-right"></i> 
                        <router-link to="soup_manage" :class="{'active':$store.state.navClassId == 5}">动态管理</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
<!-- 适配菜单 -->
    <div class="responsive-menu" v-show="this.$store.getters.getResponsiveMenuState">
        <div style="over-flow: scroll">
            <div class="menu-head">
                <i class="el-icon-more"></i>
                <span>&nbsp;&nbsp;&nbsp;菜单列表</span>
            </div>
            <div class="menu-list">
                <div class="menu-item-content">
                    <div class="menu-title">
                        <i class="el-icon-setting"></i>
                        基本设置
                    </div>
                    <ul>
                        <li>
                            <i class="el-icon-caret-right"></i> 
                            <router-link to="/web_admin/user_manage" active-class="active">用户设置</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item-content">
                    <div class="menu-title">
                        <i class="el-icon-tickets"></i> 
                        内容管理
                    </div>
                        <ul>
                        <li>
                            <i class="el-icon-caret-right"></i> 
                            <router-link to="index" active-class="active">首页管理</router-link> 
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i> 
                            <router-link to="article_manage"  active-class="active">文章管理</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i> 
                            <router-link to="mood_manage" active-class="active">心情管理</router-link>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i> 
                            <router-link to="soup_manage" active-class="active">鸡汤管理</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "leftNav",
  data: function() {
    return {};
  }
};
</script>


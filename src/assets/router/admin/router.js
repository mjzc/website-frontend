import login from '../../page/admin/log.vue'
import adminIndex from '../../page/admin/index.vue'

import home from '../../page/admin/home.vue'
import userManage from '../../page/admin/user.vue'

/******      博客管理      ******/
import articlesList from '../../page/admin/articleList.vue'
import addArticle from '../../page/admin/addArticle.vue'
import editArticle from '../../page/admin/editArticle.vue'

/******      音乐管理      ******/
import musicManage from '../../page/admin/musicList.vue'
import addMusic from '../../page/admin/addMusic.vue'

/******      动态管理      ******/
import addSoup from '../../page/admin/addSoup.vue'
import soupManage from '../../page/admin/soupList.vue'
import editSoup from '../../page/admin/editSoup.vue'

const adminRouter = [
    {
        path: '/',
        component: login,
        redirect: '/login',
        children: [
            { path: 'login', name: '网页后台登录', component: login }
        ]
    },
    {
        path: '/web_admin',
        component: adminIndex,
        redirect: '/web_admin/index',
        children: [
            { path: 'index', name: '后台首页', component: home },
            { path: 'user_manage', name: '用户设置', component: userManage },

            { path: 'article_manage', name: '博客管理',component: articlesList},
            { path: 'add_articles', name: '添加文章', component: addArticle },
            { path: 'edit_article', name: '修改文章', component: editArticle },

            { path: 'music_manage', name: '音乐管理', component: musicManage },
            { path: 'add_music',name: '添加音乐',component: addMusic },
            
            { path: 'soup_manage', name: '动态管理', component: soupManage },
            { path: 'add_soup', name: '添加动态', component: addSoup },
            { path: 'edit_soup', name: '修改动态', component: editSoup}
        ]
    }
]
export default adminRouter

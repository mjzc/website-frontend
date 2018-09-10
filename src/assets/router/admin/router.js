import login from '@/page/admin/log'
import adminIndex from '@/page/admin/index'

import home from '@/page/admin/home'
import userManage from '@/page/admin/user'

/******      博客管理      ******/
import articlesList from '@/page/admin/article/articleList'
import addArticle from '@/page/admin/article/addArticle'
import editArticle from '@/page/admin/article/editArticle'

/******      音乐管理      ******/
import musicManage from '@/page/admin/music/musicList'
import addMusic from '@/page/admin/music/addMusic'
import editMusic from '@/page/admin/music/editMusic'

/******      歌手管理      ******/
import singerManage from '@/page/admin/singer/singerList'
import addSinger from '@/page/admin/singer/addSinger'
import editSinger from '@/page/admin/singer/editSinger'

/******      动态管理      ******/
import addSoup from '@/page/admin/soup/addSoup'
import soupManage from '@/page/admin/soup/soupList'
import editSoup from '@/page/admin/soup/editSoup'

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
            // ===============    用户    ===============
            { path: 'index', name: '后台首页', component: home },
            { path: 'user_manage', name: '用户设置', component: userManage },
            // ===============    博客    ===============
            { path: 'article_manage', name: '博客管理',component: articlesList},
            { path: 'add_articles', name: '添加文章', component: addArticle },
            { path: 'edit_article', name: '修改文章', component: editArticle },
            // ===============    音乐    ===============
            { path: 'music_manage', name: '音乐管理', component: musicManage },
            { path: 'add_music', name: '添加音乐', component: addMusic },
            { path: 'edit_music', name: '编辑音乐', component: editMusic },
            // ===============    歌手    ===============
            { path: 'singer_manage', name: '歌手管理', component: singerManage },
            { path: 'add_singer', name: '添加歌手', component: addSinger },
            { path: 'edit_singer', name: '修改歌手', component: editSinger },
            // ===============    动态    ===============
            { path: 'soup_manage', name: '动态管理', component: soupManage },
            { path: 'add_soup', name: '添加动态', component: addSoup },
            { path: 'edit_soup', name: '修改动态', component: editSoup}
        ]
    }
]
export default adminRouter

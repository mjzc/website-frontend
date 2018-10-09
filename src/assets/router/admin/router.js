const login = (resolve) => {
  import('@/page/admin/log').then((module) => {
    resolve(module)
  })
}
const adminIndex = (resolve) => {
  import('@/page/admin/index').then((module) => {
    resolve(module)
  })
}
const home = (resolve) => {
  import('@/page/admin/home').then((module) => {
    resolve(module)
  })
}
const userManage = (resolve) => {
  import('@/page/admin/user').then((module) => {
    resolve(module)
  })
}
/******      博客管理      ******/
const articlesList = (resolve) => {
  import('@/page/admin/article/articleList').then((module) => {
    resolve(module)
  })
}
const addArticle = (resolve) => {
  import('@/page/admin/article/addArticle').then((module) => {
    resolve(module)
  })
}
const editArticle = (resolve) => {
  import('@/page/admin/article/editArticle').then((module) => {
    resolve(module)
  })
}
/******      音乐管理      ******/
const musicManage = (resolve) => {
  import('@/page/admin/music/musicList').then((module) => {
    resolve(module)
  })
}
const addMusic = (resolve) => {
  import('@/page/admin/music/addMusic').then((module) => {
    resolve(module)
  })
}
const editMusic = (resolve) => {
  import('@/page/admin/music/editMusic').then((module) => {
    resolve(module)
  })
}
/******      歌手管理      ******/
const singerManage = (resolve) => {
  import('@/page/admin/singer/singerList').then((module) => {
    resolve(module)
  })
}
const addSinger = (resolve) => {
  import('@/page/admin/singer/addSinger').then((module) => {
    resolve(module)
  })
}
const editSinger = (resolve) => {
  import('@/page/admin/singer/editSinger').then((module) => {
    resolve(module)
  })
}
/******      动态管理      ******/
const addSoup = (resolve) => {
  import('@/page/admin/soup/addSoup').then((module) => {
    resolve(module)
  })
}
const soupManage = (resolve) => {
  import('@/page/admin/soup/soupList').then((module) => {
    resolve(module)
  })
}
const editSoup = (resolve) => {
  import('@/page/admin/soup/editSoup').then((module) => {
    resolve(module)
  })
}

const adminRouter = [
    {
        path: '/login',
        name: '网页后台登录',
        component: login
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

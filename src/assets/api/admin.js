import fetch from '../common/js/fetch.js'
import qs from 'qs'
const apiPrefix = process.env.NODE_ENV === 'development' ? '/activity/' : '/'

/**********    用户管理   *********/

// 用户登陆
export function webAdminLogin(data) {
    return fetch({
        url: apiPrefix + 'web_login',
        method: 'POST',
        data: qs.stringify(data)
    })
}
//获取用户的设置信息
export function getAuthorInfoById (data) {
    return fetch({
        url: apiPrefix + 'web_getAuthorInfo',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 修改用户设置的信息
export function editAuthorInfoById (data) {
    return fetch({
        url: apiPrefix + 'web_editAuthorInfo',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 上传图片
export function uoloadBolgHeadImg(data) {
    return fetch({
        url: apiPrefix + 'web_uploadBlogHeadImg',
        method:'POST',
        data:data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
}

/**********    文章管理   *********/

// 获取文章列表
export function getArticleList(data) {
    return fetch({
        url: apiPrefix + 'web_getArticleList',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 删除多篇文章
export function delMoreArticles(data) {
    return fetch({
        url: apiPrefix + 'web_delArticles',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 删除单篇文章
export function delOneArticle(data) {
    return fetch({
        url: apiPrefix + 'web_delArticles',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 添加文章
export function addArticle (data) {
    return fetch({
        url: apiPrefix + 'web_addArticle',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 获取所有分类
export function getAllArticlesClass() {
    return fetch({
        url: apiPrefix + 'web_getAllClass',
        method: 'GET',
    })
}
// 查询文章的内容 
export function getArticleById (data) {
    return fetch({
        url: apiPrefix + 'web_getArticleById',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 修改文章
export function editArticleById (data) {
    return fetch({
        url: apiPrefix + 'web_editArticleById',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 根据classId查找文章
export function getAllArticlesByClassId (data) {
    return fetch({
        url: apiPrefix + 'web_getArticles',
        method: 'POST',
        data: qs.stringify(data)
    })
}




/**********    鸡汤管理   *********/

// 添加鸡汤
export function addSoupAPI (data) {
    return fetch ({
        url: apiPrefix + 'web_addSoup',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 获取所有鸡汤
export function getAllSoup (data) {
    return fetch({
        url: apiPrefix + 'web_getSoupList',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 删除鸡汤
export function delSoupByids (data) {
    return fetch({
        url: apiPrefix + 'web_delSoupByIds',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 根据id获取鸡汤的详情内容
export function getSoupDetailById (data) {
    return fetch({
        url: apiPrefix + 'web_getSoupDetail',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 修改鸡汤根据id
export function editSoupById (data) {
    return fetch({
        url: apiPrefix + 'web_editSoupById',
        method: 'POST',
        data: qs.stringify(data)
    })
}



/********* 歌手 *****/

// 添加歌手接口
export function addSingerAPI (data) {
    return fetch({
        url: apiPrefix + 'add_singer',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 获取歌手列表
export function getSingerList (data) {
    return fetch({
        url: apiPrefix + 'get_singerlist',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 删除歌手
export function delSingers (data) {
    return fetch({
        url: apiPrefix + 'del_singer_byids',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 根据id获取歌手内容
export function getSingerByIdAPI (data) {
    return fetch({
        url: apiPrefix + 'get_singerById',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 修改歌手根据id
export function editSingerById (data) {
    return fetch({
        url: apiPrefix + 'edit_singerByid',
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 获取歌手
export function _getSingers () {
    return fetch({
        url: apiPrefix + 'get_allSinger',
        method: 'GET'
    })
}

// 上传音乐mp3
export function _uploadMusic (data) {
    return fetch({
        url: apiPrefix + 'upload_music',
        method: 'POST',
        data:data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
}
// 上传歌曲
export function _sumbitSong (data) {
    return fetch({
        url: apiPrefix + 'sumbit_music_content',
        method: 'POST',
        data: qs.stringify(data)
    })
}
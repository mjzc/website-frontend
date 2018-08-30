import axios from 'axios'
import store from '../../store/index.js'
import router from '../../router/index.js'

var instance = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
    if (router.app._route.path == '/web/index' || router.app._route.path == '/web/blog') {
        
    } else {
        if (store.getters.getToken) {
            store.dispatch('navStyleSet')
        } else {
            store.dispatch('Logout').then(() => {
                router.push('/')
            })
        }
    }
    return config

}, function (error) {
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

export default instance
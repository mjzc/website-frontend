
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        id: window.localStorage.getItem('web_user'),
        userName: '',
        token: window.localStorage.getItem('jwt'),
        responsiveMenuIsShow: false,
        navClassId: 1
    },
    getters: {
        getToken: (state) => {
            return state.token
        },
        getResponsiveMenuState: (state) => {
            return state.responsiveMenuIsShow
        }
    },
    actions: {
        Logout({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                commit('SET_USERNAME', '')
                window.localStorage.setItem('jwt', '')
                resolve()
            })
        },
        navStyleSet({ commit }) {
            commit('SET_NAVCLASSID')
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USERNAME(state, userName) {
            state.userName = userName
        },
        SET_RESPONSIVEMENU(state, responsiveMenuIsShow) {
            state.responsiveMenuIsShow = responsiveMenuIsShow
        },
        SET_NAVCLASSID: function (state) {
            var path = router.app._route.path
            if (path == '/web_admin/user_manage') {
                store.state.navClassId = 1
            } else if (path == '/web_admin/index') {
                store.state.navClassId = 2
            } else if (path == '/web_admin/edit_article' || path == '/web_admin/add_articles' || path == '/web_admin/article_manage' ) {
                store.state.navClassId = 3
            } else if (path == '/web_admin/edit_music' || path == '/web_admin/add_music' || path == '/web_admin/music_manage') {
                store.state.navClassId = 4
            } else if (path == '/web_admin/soup_manage' || path == '/web_admin/add_soup' || path == '/web_admin/edit_soup') {
                store.state.navClassId = 5
            }
        }
    }
})
export default store;

// vuex--状态管理模式（前端数据库）
// state--数据库 
// mutations--修改state，将数据存入state的API （只做存入数据）
// getter--取state数据，进行简单的处理，不会影响原数据 （只做获取数据）
// actions--处理数据，在存入数据 （只做数据中间处理）

// store.state.count
// store.commit('add')
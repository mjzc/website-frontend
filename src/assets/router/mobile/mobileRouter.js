
import index from '../../page/mobile/index.vue'
import blog from '../../page/mobile/blog.vue'
import music from '../../page/mobile/music.vue'

const mobileRouter = [
    {
        path: '/web/index',
        component: index
    },
    {
        path: '/web/blog',
        component: blog
    },
    {
        path: '/web/music',
        component: music
    }
]
export default mobileRouter
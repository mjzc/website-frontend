
import index from '@/page/mobile/index.vue'
import blog from '@/page/mobile/blog.vue'
import music from '@/page/mobile/music.vue'
import resume from '@/page/mobile/resume.vue'

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
    },
    {
        path: '/resume',
        component: resume
    }
]
export default mobileRouter

import index from '@/page/mobile/index.vue'
import blog from '@/page/mobile/blog.vue'
import music from '@/page/mobile/music.vue'
import resume from '@/page/mobile/resume.vue'

const mobileRouter = [
    {
        path: '/',
        component: index,
        redirect: '/web/index',
        children: [
            { path: '/web/index', name: 'mjia网', component: index }
        ]
    },
    {
        path: '/web/blog',
        name: 'mjia博客',
        component: blog
    },
    {
        path: '/web/music',
        name: 'mjia音乐',
        component: music
    },
    {
        path: '/resume',
        name: 'mjia简历',
        component: resume
    }
]
export default mobileRouter
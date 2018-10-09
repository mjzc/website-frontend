
const index = (resolve) => {
    import('@/page/mobile/index.vue').then((module) => {
      resolve(module)
    })
  }
  const blog = (resolve) => {
    import('@/page/mobile/blog.vue').then((module) => {
      resolve(module)
    })
  }
const music = (resolve) => {
    import('@/page/mobile/music.vue').then((module) => {
      resolve(module)
    })
  }
  const resume = (resolve) => {
    import('@/page/mobile/resume.vue').then((module) => {
      resolve(module)
    })
  }

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
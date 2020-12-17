import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/home/index.vue')
  },
  {
    path: '/html_css',
    name: 'HTML_CSS',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'html/css',
      icon:''
    }
  },
  {
    path: '/js',
    name: 'JS',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'JS',
      icon:''
    }
  },
  {
    path: '/vue',
    name: 'Vue',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'Vue',
      icon:''
    }
  },
  {
    path: '/react',
    name: 'React',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'React',
      icon:''
    }
  },
  {
    path: '/ts',
    name: 'TypeScript',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'TypeScript',
      icon:''
    }
  },
  {
    path: '/node',
    name: 'Node',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'Node',
      icon:''
    }
  },
  {
    path: '/electron',
    name: 'Electron',
    component: () => import('@/components/md.vue'),
    meta:{
      title:'Electron',
      icon:''
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

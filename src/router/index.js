import { createRouter ,createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),//路由模式 hash history
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/Home.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: ()=> import('../views/Ref.vue')
    },
    {
      path: '/directive',
      name: 'directive',
      component: ()=> import('../views/Directive.vue')
    },  
    {
      path: '/jisuanqi',
      name: 'jisuanqi',
      component: ()=> import('../views/Jisuanqi.vue')
    }, 
    {
      path: '/banners',
      name: 'banners',
      component: () => import('../views/Banners.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/Reactive.vue')
    },
    {
      path: '/nextTick',
      name: 'nextTick',
      component: () => import('../views/NextTick.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/Computed.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/form.vue')
    },
    {
      path: '/shuxing',
      name: 'shuxing',
      component: () => import('../views/Shuxing.vue')
    },
    {
      path: '/xinxi',
      name: 'xinxi',
      component: () => import('../views/Xinxi.vue')
      
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../views/Class.vue')
      
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: () => import('../views/V-for.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/Event.vue')
    },
    {
      path: '/liftCycle',
      name: 'liftCycle',
      component: () => import('../views/LiftCycle.vue')
    },
    {
      path: '/xuan',
      name: 'xuan',
      component: () => import('../views/Xuan.vue')
    },
    {
      path: '/xiaomubiao',
      name: 'xiaomubiao',
      component: () => import('../views/Xiaomubiao.vue')
    },
    {
      path: '/Erjidaohang',
      name: 'Erjidaohang',
      component: () => import('../views/Erjidaohang.vue')
    },
    {
      path: '/ref2',
      name: 'ref2',
      component: () => import('../views/Ref2.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/Watch.vue')
    },
    {
      path: '/Sousuo',
      name: 'Sousuo',
      component: () => import('../views/Sousuo.vue')
    },
    {
      path: '/Options',
      name: 'Options',
      component: () => import('../views/Options.vue')
    },
    {
      path: '/color',
      name: 'color',
      component: () => import('../views/color.vue')
    },
    {
      path: '/starRating',
      name: 'starRating',
      component: () => import('../views/starRating.vue')
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: () => import('../views/Parent.vue')
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: () => import('../views/todoList.vue')
    },
    {
      path: '/biaoge',
      name: 'biaoge',
      component: () => import('../views/biaoge.vue')
    }
  ]
})

export default router

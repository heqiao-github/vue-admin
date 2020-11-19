import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: 'baseCaseInfo',//'/dashboard',
    meta:{title:'案件管理'},
    children: [
      {
      path: 'baseCaseInfo',//'dashboard',
      name: 'baseCaseInfo',
      component: () => import('@/views/caseManage/baseCaseInfo'),
      meta: { title: '基本案情',affix:true }
    },{
      path:"gangInfo",
      name:'gangInfo',
      component:() => import('@/views/caseManage/gangInfo') ,
      meta:{title: '团伙信息'}
    },{
      path:"personStructure",
      name:'personStructure',
      component:() => import('@/views/caseManage/personStructure') ,
      meta:{title: '层级架构'}
    },{
      path:"resultLog",
      name:'resultLog',
      component:() => import('@/views/caseManage/resultLog') ,
      meta:{title: '研判日志'}
    },{
      path:"suspectInfo",
      name:'suspectInfo',
      component:() => import('@/views/caseManage/suspectInfo') ,
      meta:{title: '涉案人信息'}
    },{
      path:"waitingList",
      name:'waitingList',
      component:() => import('@/views/caseManage/waitingList') ,
      meta:{title: '待调单清单'}
    }
  ]
  },

  {
    path: '/dataImport',
    component: Layout,
    redirect: '/dataImport/dataInStorage',
    name: 'dataImport',
    meta: { title: '数据导入' },
    children: [
      {
        path: 'dataInStorage',
        name: 'dataInStorage',
        component: () => import('@/views/dataImport/dataInStorage'),
        meta: { title: '数据入库', icon: 'table' }
      },
      {
        path: 'dataClean',
        name: 'dataClean',
        component: () => import('@/views/dataImport/dataClean'),
        meta: { title: '数据清洗', icon: 'tree' }
      },
      {
        path: 'personTable',
        name: 'dataClean',
        component: () => import('@/views/dataImport/personList'),
        meta: { title: '调单人员表' }
      }
    ]
  },
  {
    path:'/analysis',
    name: 'analysis',
    component:Layout,
    meta: {title: "研判分析"},
    children: [
      {
        path: 'holographicArchive',
        name: 'holographicArchive',
        component: () => import('@/views/analysis/holographicArchive'),
        meta: {title: '全息档案'}
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/analysis/search'),
        meta: {title: '一键搜'}
      },
      {
        path: 'moneyAnalysis',
        name: 'moneyAnalysis',
        component: () => import('@/views/analysis/moneyAnalysis'),
        meta: {title: '资金分析'}
      },
      {
        path: 'communicationAnalysis',
        name: 'communicationAnalysis',
        component: () => import('@/views/analysis/communicationAnalysis'),
        meta: {title: '通联分析'}
      },
      {
        path: 'commonPeerAnalysis',
        name: 'commonPeerAnalysis',
        component: () => import('@/views/analysis/commonPeerAnalysis'),
        meta: {title: '共同对端分析'}
      },
    ]
  },

  {
    path: '/archive',
    component: Layout,
    name:'archive',
    meta: {title: "归档"},
    children: [
      {
        path: 'generateSearchInput',
        name: 'generateSearchInput',
        component: () => import('@/views/archive/generateSearchReport'),
        meta: { title: '生成研判报告', icon: 'form' }
      }
    ]
  },

  
  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

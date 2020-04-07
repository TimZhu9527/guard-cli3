import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    // 登录页
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    // 企业端布局
    {
      path: '/Layout',
      name: 'layout',
      component: () => import('@/components/Layout.vue'),
      // redirect: 'CompanyInfo',
      children: [{
          // 企业信息
          path: '/CompanyInfo',
          name: 'CompanyInfo',
          component: () => import('@/views/CompanyInfo'),
          meta: {
            title: '企业信息录入'
          }
        },
        {
          // 项目管理
          path: '/ItemInfo',
          name: 'ItemInfo',
          component: () => import('@/views/ItemInfo'),
          meta: {
            title: '项目管理'
          }
        },
        {
          // 班组管理
          path: '/TeamInfo',
          name: 'TeamInfo',
          component: () => import('@/views/TeamInfo'),
          meta: {
            title: '班组管理'
          }
        }
      ]
    },

    // 项目端布局
    {
      path: '/projectLayout',
      name: 'projectLayout',
      component: () => import('@/components/projectLayout.vue'),
      // redirect: 'CompanyInfo',
      children: [{
          // 企业信息
          path: '/CompanyInfo',
          name: 'CompanyInfo',
          component: () => import('@/views/CompanyInfo'),
          meta: {
            title: '企业信息录入'
          }
        },
        {
          // 项目管理
          path: '/ItemInfo',
          name: 'ItemInfo',
          component: () => import('@/views/ItemInfo'),
          meta: {
            title: '项目管理'
          }
        },
        {
          // 班组管理
          path: '/TeamInfo',
          name: 'TeamInfo',
          component: () => import('@/views/TeamInfo'),
          meta: {
            title: '班组管理'
          }
        },
        {
          // 企业信息管理
          path: '/Eim',
          name: 'Eim',
          component: () => import('@/views/CompanyManage'),
          meta: {
            title: '企业信息管理'
          }
        },
        {
          // 添加企业信息管理
          path: '/addComp',
          name: 'addComp',
          component: () => import('@/views/CompanyManage/AddCompany'),
          meta: {
            title: '添加企业信息'
          }
        }
      ]
    }

  ]
})

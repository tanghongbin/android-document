import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import androidDocument from '../buiness-module/andriod-document/pages/android-document.vue'
import preWord from '../buiness-module/andriod-document/pages/pre-word.vue'
import commonModule from '../buiness-module/andriod-document/pages/subpages/common-module.vue'
import Test from '../buiness-module/common/pages/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: preWord
    }, {
      path: '/document',
      name: 'document',
      component: androidDocument
    }, {
      path: '/preword',
      name: 'document',
      component: preWord
    }, {
      path: '/test',
      name: 'test',
      component: Test
    }, {
      path: '/common-module',
      name: 'commonModule',
      component: commonModule
    }
  ]
})

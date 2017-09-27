import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import androidDocument from '../buiness-module/andriod-document/pages/android-document.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/document',
      name: 'document',
      component: androidDocument
    }
  ]
})

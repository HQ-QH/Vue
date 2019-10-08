import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/father'
import child from '@/components/child'
import page from '@/components/page'
import hello from '@/components/Hello'
import toast from '@/components/Toast'
import formdata from '@/components/formdata'
import select from '@/components/select'
import zsgcs from '@/components/zsgc'
import demo from '@/components/demo'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
      path: '/demo',
      name: 'demo',
      component: demo
    }, {
      path: '/zsgcs',
      name: 'zsgcs',
      component: zsgcs
    }, {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/toast',
      name: 'toast',
      component: toast
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/formdata',
      name: 'formdata',
      component: formdata
    },
    {
      path: '/father',
      name: 'Father',
      component: father
    },
    {
      path: '/child',
      name: 'child',
      component: child
    }
  ]
})

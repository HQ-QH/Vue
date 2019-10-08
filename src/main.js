import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
Vue.use(iView)
// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {
  VTable,
  VPagination
} from 'vue-easytable'
//这样我们就实现了全局的事件总线对象
// Vue.prototype.bus = new Vue()
// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
// import Form from './JS'
// Vue.component("form", Form);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  // Form,
  components: {
    App,
  },
  template: '<App/>'
})

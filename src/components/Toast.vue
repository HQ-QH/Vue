<template>
  <div>
    <input type="button" value="点击触发" @click="getData" />
    <span>{{name}}</span>
  </div>
</template>
<script>
import Bus from '../bus.js'
export default {
  data () {
    return {
      name: 0
    }
  },
  mounted: function () {
    const vm = this
    // 用$on事件来接收参数   并且调用了在a组件中出发的方法
    Bus.$on('Assembly', (data) => {
      console.log(data,'111')
      vm.name = data
    })
  },
  methods: {
    getData: function () {
      this.name++
    }
  }
}
</script>
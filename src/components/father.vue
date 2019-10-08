<style scoped>
</style>>
<template>
  <div id="father" style="font-size:16px;border:1px lightpink solid">
    <h1>我是父组件</h1>
    <p>父组件接收子组件的值为：{{sendFatherData}}</p>
    <child style="color:red" :tochild="toChild" :todata="toData" @toFather="sendFather"></child>
    <!-- <form-data></form-data> -->
    <slot></slot>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  components: {
    child
  },
  data () {
    return {
      toChild: '今天周五，',
      toData: '这是父组件给子组建的数据',
      sendFatherData: ''
    }
  },
  methods: {
    sendFather (data) {
      this.sendFatherData = data
    }
  }

}
</script>
<style scoped>
</style>
<template>
  <div id="child" style="border:1px gray solid">
    <h3>我是子组件</h3>
    <p>子组件接收父组件的值为:{{tochild}}{{todata}}</p>
    <p style="color:black">--------下面子传父呦---------</p>
    <button value="点击传值" @click="toFather">点击</button>
  </div>
</template>
<script>
export default {
  props: {
    tochild: String,
    todata: String
  },
  data () {
    return {
    }
  },
  methods: {
    toFather () {
      // console.log('点击了呦');
      this.$emit('toFather', '这是子组件传给父组件的数据')
    }
  }
}
</script>
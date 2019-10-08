<template>
  <div>
    <span>{{elementValue}}</span>
    </br>
    <span style="color:red">{{eleif===88?'放假啦啦啦':'继续学习拉'}}</span>
     </br>
    <input type="button" value="点击触发" @click="elementByValue" />
  </div>
</template>
<script>
// 引入公共的bus，来做为中间传达的工具
import Bus from '../bus.js'
export default {
  data () {
    return {
      elementValue: 4,
      eleif: 88,
      A:true,
      B:false
    }
  },
  methods: {
    elementByValue: function () {
      //  通过事件中心去发射'Assembly'自己命名的，方法，this.elementValue为传的参数。
      Bus.$emit('Assembly', this.elementValue)
    }
  }
}
</script>
<style  scoped>
th {
  width: 200px;
  font-size: 16px;
}
td {
  width: 200px;
  text-align: center;
}
</style>
<template>
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加你喜欢的品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          品牌Id：
          <input type="text" class="form-control" v-model="id" />
        </label>
        <label>
          品牌名称：
          <input type="text" class="form-control" v-model="brandName" />
        </label>
        <input type="button" value="添加" class="btn btn-primary" @click="add()" />
        <label>
          搜索名称关键字：
          <input type="text" class="form-control" v-model="keywords" v-focus />
        </label>
      </div>
    </div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>品牌名称</th>
          <th>当前时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!--v-for中的数据不再是直接从data中获取，而是通过search方法对data中的数据进行过滤再显示-->
        <tr v-for="(brand,index) in search(keywords)" :key="brand.id">
          <td>{{brand.id}}</td>
          <td>{{brand.brandName}}</td>
          <td>{{brand.updateTime | dateFormate('yyyy-mm-dd hh:mm:ss')}}</td>
          <td>
            <a href="#" @click.prevent="del3(brand.id)" key>删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
import Vue from "vue";
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

//对表格里的日期数据做处理  因为数据是拿的页面打开的时间，需要转换一下
Vue.filter('dateFormate', function (time) {
  const date = new Date(time)
  const year = date.getFullYear()
  // 如 09:11:05
  const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
})
export default {
  data () {
    return {
      id: '',
      brandName: '',
      keywords: '',
      brandsList: [
        { id: 1, brandName: '得力', updateTime: new Date() },
        { id: 2, brandName: '科力普', updateTime: new Date() },
        { id: 3, brandName: '晨光', updateTime: new Date() },
        { id: 4, brandName: '英雄', updateTime: new Date() },
        { id: 5, brandName: '得力', updateTime: new Date() },
        { id: 6, brandName: '科力普', updateTime: new Date() },
        { id: 7, brandName: '晨光', updateTime: new Date() },
        { id: 8, brandName: '英雄', updateTime: new Date() },
        { id: 9, brandName: '得力', updateTime: new Date() },
        { id: 10, brandName: '科力普', updateTime: new Date() },
        { id: 11, brandName: '晨光', updateTime: new Date() },
        { id: 12, brandName: '英雄', updateTime: new Date() },
        { id: 13, brandName: '得力', updateTime: new Date() },
        { id: 14, brandName: '科力普', updateTime: new Date() },
        { id: 15, brandName: '晨光', updateTime: new Date() },
        { id: 16, brandName: '英雄', updateTime: new Date() }
      ]
    }
  },
  methods: {
    add () {
      var brand = { id: this.id, brandName: this.brandName, updateTime: new Date() };
      this.brandsList.push(brand);
      this.id = this.brandName = '';
    },
    del3 (id) {//根据id找index删除
      var index = this.brandsList.findIndex(b => {
        if (b.id == id) {
          alert('确认删除所选项？')
          return true;
          console.log('删除成功')
        }
      })
      this.brandsList.splice(index, 1);
    },
    search (keywords) {
      return this.brandsList.filter(item => {
        if (item.brandName.includes(keywords)) {
          return item
        }
      })
      // if (item.brandName.includes(keywords)) {
      //   return item
      // }
    }
  }
  }

</script>
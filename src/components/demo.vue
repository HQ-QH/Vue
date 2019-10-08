<template>
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id:
          <input type="text" class="form-control" v-model="id" />
        </label>
        <label>
          Name:
          <input type="text" class="form-control" v-model="name" @keyup.enter="add" />
        </label>
        <input type="button" value="添加" class="btn btn-primary" @click="add" />

        <label>
          搜索名称关键字：
          <input type="text" class="form-control" v-model="keywords" v-focus />
        </label>
      </div>
    </div>

    <table class="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for中的数据默认是从data上的list直接渲染来的 -->
        <!-- 现在改为动态的方法查询 -->
        <tr v-for="item in search(keywords)" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.ctime | dateFormate('') }}</td>
          <td>
            <a href @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    <script>
export default {
  data () {
    return {
      id: '',
      name: '',
      keywords: '',
      list: [
        { id: 1, name: '奔驰', ctime: new Date() },
        { id: 2, name: '宝马', ctime: new Date() }
      ]
    }
  },
  methods: {
    // 添加
    add () {
      if (this.id != '' && this.name != '') {
        const car = { id: this.id, name: this.name, ctime: new Date() }
        this.list.push(car)
        this.id = ''
        this.name = ''
      }
    },
    // 删除
    del (id) {
      const index = this.list.findIndex(item => {
        if (item.id == id) {
          return true
        }
      })
      this.list.splice(index, 1)
    },
    // 条件查询
    search (keywords) {
      return this.list.filter(item => {
        if (item.name.includes(keywords)) {
          return item
        }
      })
    }
  }
}
import Vue from "vue";
// 全局自定义指令
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
// 全局时间过滤器
Vue.filter('dateFormate', function (dateStr, pattern) {
  const dt = new Date(dateStr)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1).toString().padStart(2, '0')
  const d = dt
    .getDate()
    .toString()
    .padStart(2, '0')
  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y}-${m}-${d}`
  } else {
    const hh = dt
      .getHours()
      .toString()
      .padStart(2, '0')
    const mm = dt
      .getMinutes()
      .toString()
      .padStart(2, '0')
    const ss = dt
      .getSeconds()
      .toString()
      .padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
})
    </script>
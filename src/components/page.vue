<style scoped>
.paging {
  float: right;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <Table :columns="historyColumns" :data="historyData"></Table>
    <p>
      <label>
        搜索名称关键字：
        <input type="text" v-model="keywords" v-focus  @keyup.enter="search"/>
      </label>
    </p>
    <Page
      show-sizer
      :total="dataCount"
      :page-size="pageSize"
      show-total
      class="paging"
      @on-change="changepage"
      @on-page-size-change="changepagesize"
    ></Page>
  </div>
</template>
<script>
import Vue from 'vue'
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

export default {
  data () {
    return {
      // keywords: '',
      slist: [],
      keywords: '',
      searchlist: [],
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      pageSize: 15,
      historyColumns: [
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: '人员',
          key: 'username'
        },
        {
          title: '操作',
          key: 'shenpistatus'
        },
        {
          title: '意见',
          key: 'shenpicomments'
        },
        {
          title: '时间',
          key: 'time'
        }
      ],
  historyData: [
    {      "id": 1,
      "username": "1",
      "shenpistatus": "审批已通过",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-24 18:11"
    },
    {      "id": 2,
      "username": "2",
      "shenpistatus": "审批已通过",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-24 18:11"
    },
    {      "id": 3,
      "username": "3",
      "shenpistatus": "审批已通过",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-24 10:04"
    },
    {      "id": 4,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "  收入 > 999 && 支出 < 201",
      "time": "2017-07-24 10:03"
    },
    {      "id": 5,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "  收入 > 999 && 支出 < 201",
      "time": "2017-07-24 10:02"
    },
    {      "id": 6,
      "username": "智能审批",
      "shenpistatus": "审批已通过",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-24 10:02"
    },
    {      "id": 7,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-24 10:01"
    },
    {      "id": 8,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-24 09:56"
    },
    {      "id": 9,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:23"
    },
    {      "id": 10,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "净收入 > 5000",
      "time": "2017-07-21 14:23"
    },
    {      "id": 11,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:23"
    },
    {      "id": 12,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "所有项目的总净收入 > 5000",
      "time": "2017-07-21 14:23"
    },
    {      "id": 13,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "支出 < 201 && 所有项目的总净收入 > 5000",
      "time": "2017-07-21 14:23"
    },
    {      "id": 14,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "  收入 > 999",
      "time": "2017-07-21 14:21"
    },
    {      "id": 15,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:21"
    },
    {      "id": 16,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:20"
    },
    {      "id": 16,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": " 所有项目的总净收入 > 5000",
      "time": "2017-07-21 14:20"
    },
    {      "id": 17,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:14"
    },
    {      "id": 18,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:13"
    },
    {      "id": 19,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:11"
    },
    {      "id": 20,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-21 14:10"
    },
    {      "id": 21,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "  收入 > 5000",
      "time": "2017-07-20 18:09"
    },
    {      "id": 22,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "  收入  5000",
      "time": "2017-07-20 18:08"
    },
    {      "id": 23,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "  收入 >5000",
      "time": "2017-07-20 18:08"
    },
    {      "id": 24,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-20 18:07"
    },
    {      "id": 25,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-20 18:05"
    },
    {      "id": 26,
      "username": "智能审批",
      "shenpistatus": "审批已通过",
      "shenpicomments": "wedfqw",
      "time": "2017-07-20 15:50"
    },
    {      "id": 27,
      "username": "智能审批",
      "shenpistatus": "审批已通过",
      "shenpicomments": "wedfqw",
      "time": "2017-07-20 15:20"
    },
    {      "id": 28,
      "username": "智能审批",
      "shenpistatus": "审批被拒绝",
      "shenpicomments": "自动审批通过",
      "time": "2017-07-19 18:27"
    }
  ]
}

  },
  methods: {
    // // 获取历史记录信息
    handleListApproveHistory () {
      // 保存取到的所有数据
      this.ajaxHistoryData = this.historyData
      this.dataCount = this.historyData.length;
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if (this.historyData.length < this.pageSize) {
        this.historyData = this.ajaxHistoryData;
      } else {
        this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
      }
    },
    changepage (index) {
      const _start = (index - 1) * this.pageSize;
      const _end = index * this.pageSize;
      this.historyData = this.ajaxHistoryData.slice(_start, _end);
    },

    //改变每页条数
    changepagesize (pageSize) {
      this.pageSize = pageSize;
      console.log(pageSize,'pageSize')
      this.handleListApproveHistory()
    },


    // 条件查询
    search () {
     this.historyData = this.historyData.filter(item => {
        if (item.username == this.keywords) {
          console.log(item,'item')
          return item
        }
      })
    }
  },
  created () {
    this.handleListApproveHistory();
  },

  setSlist (arr) {
    this.slist = JSON.parse(JSON.stringify(arr));

  },

  watch: {

    
  }
}
</script>
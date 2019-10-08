<style scoped>
</style>
<template>
  <div class="fileItem">
    <input type="file" ref="fileId" @change="getFile" />
    <button @click="importRow">点击上传</button>
    <br />
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'form-data',
  data () {
    return {
      xlsFile: ''
    }
  },
  methods: {
    getFile () {
      //获取file内容
      let files = this.$refs.fileId.files[0];
      this.xlsFile = files;
    },
    importRow () {
      if (this.xlsFile == '') {
        alert('请先添加文件')
        return;
      } else {
        alert('文件已上传');
      }
      let formdata = new window.FormData();
      formdata.append('file', this.xlsFile);
      const postFileUrll = '/'
      this.$axios.post(this.postFileUrll, formdata).then(function (response) {
        alert('success');
        this.xlsFile = '';
      }).catch(function (error) {
        alert('error');
        this.xlsFile = '';
      })
    },
  }

}
</script>
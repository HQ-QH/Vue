<style>
label {
  line-height: 34px;
}
th,
td {
  width: 100px;
  text-align: center;
}
</style>
<template>
  <div id="app">
    <div class="form-group">
      <label>Name：</label>
      <input type="text" v-model="newPerson.name" />
    </div>
    <div class="form-group">
      <label>Age：</label>
      <input type="text" v-model="newPerson.age" />
    </div>
    <div class="form-group">
      <label>Sex：</label>
      <select v-model="newPerson.sex">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <button @click="createPerson">添加</button>
    </div>
    <div class="panel-body">
      <table class="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person,index) in people">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.sex }}</td>
            <td>
              <button v-on:click="delPerson(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newPerson: {
        name: '',
        age: '',
        Address: ''
      },
      people: [{
        name: 'Jack',
        age: 30,
        sex: 'Male'
      }]
    }
  },
  methods: {
    createPerson: function () {
      if (this.name != '' && this.age != '' && this.sex != '') {
        alert('任意一项不能为空呦')
      } else {
        this.people.push(this.newPerson);
        // 添加完newPerson对象后，重置newPerson对象
        this.newPerson = {
          name: '',
          age: '',
          sex: 'Male'
        }
      }

    },
    delPerson (index) {
      alert('确认删除？')
      this.people.splice(index, 1);
    }
  }
}
</script>
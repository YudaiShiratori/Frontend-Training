<template>
  <div class="makeTodo">
    <div>
      <form @submit.prevent>
        <input type="text" v-model="newTask">
        <button @click="addTask">Add</button>
        <button @click="deleteTask">Delete</button>
      </form>
    </div>
    <div class="todolist">
      <p>TODO</p>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <label>
            <input type="checkbox" v-model="todo.done">
            <span>{{ todo.text }}</span>
          </label>
        </li>
      </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'MakeTodo',
  data() {
    return {
      newTask: '',
      todos: []
    }
  },
  methods: {
    addTask: function(){
      if(this.newTask == '') return
      var todo = {
        text : this.newTask,
        done: false
      }
      this.todos.push(todo)
      this.newTask = ''
    },
    deleteTask: function(){
      this.todos = this.todos.filter(function(todo){
        return todo.done == false;
      })
    }
  }
}
</script>

<style>
  ul li {
    list-style: none;
  }
  
 .todolist {
    width:300px;
    border:1px;
    border-style:solid; 
    border-color:#999;
    margin: 20px 10px;
  }
</style>





<!--
// <template>
//   <div class="inputForm">
//     <p><input type="text" placeholder="名前" v-model="info.name"/></p>
//     <p>
//       <input type="radio" value="男性"v-model="info.sex" checked/>男性
//       <input type="radio" value="女性" v-model="info.sex"/>女性
//     </p>
//     <p><textarea rows="5" cols="30" placeholder="自己紹介" v-model="info.profile"/></p>
//     <button @click="onInit">初期化</button>
//     <button @click="onClick">表示</button>
//     <div v-if="isShow">
//       <p>{{ info.name }}</p>
//       <p>{{ info.sex }}</p>
//       <p>{{ info.profile }}</p>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   name: 'InputForm',
//   data() {
//     return {
//       isShow: false,
//       info: {
//         name: "",
//         sex: "男性",
//         profile: ""
//       }
//     }
//   },
//   watch: {
//     info: {
//       handler() {
//         this.isShow = false
//       },
//       deep: true
//     }
//   },
//   methods: {
//     onClick() {
//       this.isShow = true
//     },
//     OnInit() {
//       const value = {
//         name: "",
//         sex: "",
//         profile: ""
//       } 
//       this.$emit("input", value)
//     }
//   },
//   props: {
//     value: {
//       type: Object,
//       default: null
//     }
//   }
// }
// </script>

// <style scoped>
// .inputForm {
//   margin: 10px;
//   background: wheat;
// }
// </style>
-->

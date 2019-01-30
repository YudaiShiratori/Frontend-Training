<template>
  <make-todo />  
</template>

<script>
import MakeTodo from './components/MakeTodo.vue'

export default {
  name: 'app',
  components: {
    MakeTodo
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>



<!--
// <template>
//   <div id="app">
//     <img alt="Vue logo" src="./assets/logo.png">
//     <HelloWorld msg="Welcome to Your Vue.js App"/> 
//     <div>
//       <input type="text" v-model="name">
//       <span v-once>I am {{ name }}</span>
//     </div>
    
//     <div>
//       <div v-if="isShow">Can you see?</div>
//       <span v-for="(item, index) in items" :key="index">{{item }}</span>
//     </div>

//     <div v-for="(item) in infos" :key="item.id">
//       {{ item.name }}は{{ item.hobby}} が趣味
//     </div>
    
//     <div @click="onClick(5)">
//       <button @click.stop="onClick(3)">
//         button
//       </button>
//       <p>{{ btnTag }}</p>
//     </div>

//     <div>
//       <a @click="onLink">google</a>
//     </div>

//     <div>
//       <input type="text" v-model="name">
//       <div>your name is {{ name }}</div>
//       <div>文字数: {{ nameCount }}</div>
//     </div>

//     <div>
//       <input type="text" placeholder="id" v-model="info.id"/>
//       <input type="text" placeholder="name" v-model="info.name"/>
//       <input type="text" placeholder="hobby" v-model="info.hobby"/>
//       <p>{{ watchItem }}</p>
//     </div>

//     <div v-if="dateJudgement">2019年ですね！</div>
//     <div v-bind:class="fontColor">エラーだったら赤色になるよ</div>

//     <div>{{ nowDate | year }}</div>
    
//     <input-form v-model="info"/>
//     <div>
//       呼び元の値
//       <p>{{ info.name }}</p>
//       <p>{{ info.sex }}</p>
//       <p>{{ info.profile }}</p>
//     </div>
//   </div>
// </template>

// <script>

// import InputForm from
// './components/InputForm.vue'

// export default {
//   name: 'app',
//   components: {
//     InputForm
//   },
//   data() {
//     return {
//       name: 'aaa',
//       isShow: false,
//       items: ["a", "s", "h"],
//       btnTag: 0,
//       nameCount: 0,
//       info: {
//         id: 0, name: "asdf", hobby: "kyudo",
//         sex: "male", profile: "I like kyudo"
//       },
//       watchItem: "",
//       nowDate: new Date()
//     }
//   },
//   methods: {
//     onClick(tag) {
//       this.btnTag = tag
//     },
//     onLink() {
//       location.href = "https://www.google.com/"
//     }
//   },
//   created () {
//     console.log("DOM NO")
//   },
//   mounted () {
//     console.log("DOM OK")
//     this.nameCount = this.name.length
//   },
//   watch: {
//     name(newVal, oldVal) {
//       this.nameCount = newVal.length
//     },
//     'info.name': {
//       handler(val) {
//         this.watchItem = val
//       },
//       deep: true
//     }
//   },
//   computed: {
//     dateJudgement() {
//       const date = new Date()
//       return date.getFullYear() === 2019? true : false
//     },
//     fontColor() {
//       return this.error === null? "fontColor_blue" : "fontColor_red"
//     },
//     filters: {
//       year(val) {
//         return val.getFullYear()
//       }
//     }
//   }

// }
// </script>

// <style scoped>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// .fontColor__blue {
//   color: blue
// }
// .fontColor__red {
//   color: red
// }
// </style>
-->

<template>
  <div class="top">
    <v-flex>
      <v-card class="container">
        <v-flex>
          <h2>匿名認証</h2>
          <v-flex style="margin: 24px;">
            <span v-if="isLoginStatus==true"><b>ログイン中</b></span>
            <span v-else-if="isLoginStatus==false">ログアウト中</span>
          </v-flex>
          <v-flex style="margin: 24px;" xs12 sm6 offset-sm3>
            <v-btn
              @click="onLogin"
              :loading="isLoading"
              :disabled="isLoading"
              color="blue"
              class="white--text">
              ログインする
            </v-btn>
            <v-btn
              @click="onLogout"
              :loading="isLoading"
              :disabled="!isLoginStatus"
              color="red"
              class="white--text">
              ログアウトする
            </v-btn>
          </v-flex>
        </v-flex>
      </v-card>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from 'firebase/app'
import 'firebase/auth'

@Component({
  name: 'AnonymouslyPage'
})

export default class AnonymouslyPage extends Vue {

  isLoading: boolean = false
  isLoginStatus: boolean | null = null
  mounted () {
    this.getItems()
  }
  getItems() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.isLoginStatus = true
      } else {
        this.isLoginStatus = false
      }
    })
  }

  async onLogin() {
    this.isLoading = true
    await this.signInAnonymously()
    this.isLoading = false
  }

  async onLogout() {
    this.isLoading = true
    await this.signOut()
    this.isLoading = false
  }
  
  async signInAnonymously() {
    try {
      const result = await firebase.auth().signInAnonymously()
      const user = firebase.auth().currentUser
      if (user !== null) {
        console.log('user', user.uid)
      }
      this.$router.push({ name: 'sign_in_finish_page'})
    } catch (error) {
      console.log(error)
    }
  }
  async signOut() {
    try {
      const result = await firebase.auth().signOut()
      console.log(result)
      this.isLoginStatus = false
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<style lang="stylus">
.top
  margin 10px
.container
  text-align left 
  margin-top 20px
.subtitle
  padding-left 12px
</style>
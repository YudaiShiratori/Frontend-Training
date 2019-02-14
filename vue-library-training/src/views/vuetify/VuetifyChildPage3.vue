<template>
  <div class="container">
    <div class="container__body">
      <v-card height="580px" flat>
        <template>
          <div class="headline text-xs-center pa-5">
            {{ title + `${selectedTab+1 }`}}
            <v-flex style="margin: 16px;" v-if="selectedTab===0">
              <v-text-field v-model="bottomNaviData0.name" label="名前" outline placeholder="名前" />
              <v-text-field v-model="bottomNaviData0.age" label="年齢" outline placeholder="年齢" />
              <v-btn color="blue" class="white--text" @click="onClickTab0Btn" >表示</v-btn>
            </v-flex>
          </div>
        </template>
        <v-bottom-nav
          :value = "true"
          absolute
          color="transparent">
          <v-btn
            color="teal"
            flat
            value="recent"
            @click="onClickTab(0)">
            <span>タブ1</span>
            <v-icon>history</v-icon>
          </v-btn>
        </v-bottom-nav>
        <v-snackbar
          v-model="isSnackbar" color="blue" :timeout="timeout" mullti-line>
          <div v-html="SnackbarText" />
          <v-btn dark flat @click="isSnackbar = false">
            閉じる
          </v-btn>
        </v-snackbar>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue}  from 'vue-property-decorator'
@Component
export default class VuetifyChildPage3 extends Vue{
  title: string =  'v-bottom-navi-tab'

  selectedTab: number = 0
  bottomNaviData0: any = {
    name: 'ゲスト',
    age: '22',
  }

  isSnackbar: boolean = false
  SnackbarText = ''
  timeout = 5000

  onClickTab0Btn() {
    console.log('tabBtn')
    this.SnackbarText = `名前：${this.bottomNaviData0.name}</br>年齢：${this.bottomNaviData0.age}`
    this.isSnackbar = true
  }
}
</script>


<style lang="stylus" scoped>
.container
  text-align left
  margin 0 auto 
  width 100%
  &__body
    margin-top 24px
</style>

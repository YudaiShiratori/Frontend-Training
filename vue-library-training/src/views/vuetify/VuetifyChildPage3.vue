<template>
  <div class="container">
    <div class="container__body">
      <v-card height="550px" flat>
        <template>
          <div class="headline text-xs-center pa-5">
            {{ title + `${selectedTab+1 }`}}
            <v-flex style="margin: 16px;" v-if="selectedTab===0">
              <v-text-field v-model="bottomNaviData0.name" label="名前" outline placeholder="名前" />
              <v-text-field v-model="bottomNaviData0.age" label="年齢" outline placeholder="年齢" />
              <v-btn color="blue" class="white--text" @click="onClickTab0Btn" >表示</v-btn>
            </v-flex>
            <v-flex style="margin: 16px;" v-else-if="selectedTab===1">
              <v-tabs
                slot="extension"
                v-model="bottomNaviData1.model"
                centered
                color="cyan"
                slidar-color="yellow">
                <v-tab v-for="index in 3" :key="index" :href="`#tab-${index}`" class="white--text">
                  メニュー{{ index }}
                </v-tab>
                <v-tabs-items v-model="bottomNaviData1.model">
                  <v-tab-item v-for="index in 3" :key="index" :value="`tab-${index}`">
                    <v-card flat>
                      <v-card-text v-text="bottomNaviData1.text + index" />
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-tabs>
            </v-flex>
            <v-flex style="margin: 16px;" v-else>
              <v-carousel>
                <v-carousel-item v-for="(item, index) in bottomNaviData2" :key="index" :src="item.src"/>
              </v-carousel>
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
          <v-btn
            color="teal"
            flat
            value="nearby"
            @click="onClickTab(1)">
            <span>タブ2</span>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn>
          <v-btn
            color="teal"
            flat
            value="nearby"
            @click="onClickTab(2)">
            <span>タブ3</span>
            <v-icon>place</v-icon>
          </v-btn>
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
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class VuetifyChildPage3 extends Vue {
  title: string =  'v-bottom-navi-tab'

  selectedTab: number = 0
  bottomNaviData0: any = {
    name: 'ゲスト',
    age: '22',
  }
  bottomNaviData1: any = {
    model: 'tab-2',
    text: 'menu-tab',
  }
  bottomNaviData2: any = [
    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'},
  ]

  isSnackbar: boolean = false
  SnackbarText = ''
  timeout = 5000

  onClickTab(tab: number) {
    this.selectedTab = tab
  }

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
    margin-top 2px
</style>

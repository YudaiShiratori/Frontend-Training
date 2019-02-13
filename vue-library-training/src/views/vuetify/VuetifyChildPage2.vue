
<template>
  <div class="container">
    <v-flex class="container__body">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-toolbar color="orange" dark>
              <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-toolbar>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header">
                  {{ item.header }}
                </v-subheader>
                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"/>
                <v-list-tile
                  v-else
                  :key="index"
                  avatar
                  @click="onClickList(item)">
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title" />
                    <v-list-tile-sub-title v-html="item.subtitle" />
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
            <v-btn
              color="orange"
              dark
              small
              absolute
              bottom
              right=""
              fab
              @click="onClickAdd">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-dialog
      v-model="isDialog"
      width="500">
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title>
          {{ selectedItem.title }}
        </v-card-title>
        <v-flex style="margin-top: 16px;">
          <img :src="selectedItem.avatar" class="avatar">
        </v-flex>
        <v-card-text>
          {{ selectedItem.subtitle }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="isDialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class VuetifyChildpage2 extends Vue {
  title: string = 'v-list v-dialog'
  items: any[] = [
    { header: 'リスト' },
    {
      id: 0,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'タイトル1',
      subtitle: 'サブタイトル',
    },
  ]
  selectedItem: any = {
    avatar: '',
    title: '',
    subtitle: '',
  }
  isDialog: boolean = false
  onClickList(item: any) {
    console.log(item)
    this.selectedItem = item
    this.isDialog = true
  }
  onClickAdd() {
    this.items.push({ divider: true, inset: true})
    const nextId = this.items.filter((element: any) => 'id' in element).length + 1
    const item = {
      id: nextId - 1,
      avatar: `https://cdn.vuetifyjs.com/images/lists/${nextId}.jpg`,
      title: `タイトル${nextId}`,
      subtitle: `サブタイトル${nextId} サブタイトル${nextId}`,
    }
    this.items.push(item)
  }
}
</script>

<style lang="stylus">
.container
  text-align left 
  margin 0 auto
  width 100%
  &__body
    margin-top 24px
img.avatar
  border-radius 50px
  height 100px
  width 100px
</style>
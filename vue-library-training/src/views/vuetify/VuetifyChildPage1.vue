<template>
  <div class="container">
    <v-flex class="container_body">
      <v-flex  xs12 sm6 offset-sm3>
        <v-card>
          <v-img class="white--text" height:="200px;" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          <v-container full-height-fluid>
            <v-layout full-height>
              <v-flex xs12 align-end flexbox>
                <h1>{{ title }}</h1>
              </v-flex>
            </v-layout>
          </v-container>
          </v-img>
          <v-card-title>
            <v-layout column>
              <h2>v-cardのタイトル</h2>
              <div>コメ　コメ　コメ　コメ　コメ</div>
            </v-layout>
          </v-card-title>
          <v-card-action>
            <v-btn flat color="blue">btn</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class VuetifyChildPage1 extends Vue {
  title: string = 'v-cardサンプル'
}
</script>

<style lang="stylus" scoped>
.container
  text-align left 
  margin 0 auto 
  width 100%
  &_body
    margin-top 24px
</style>


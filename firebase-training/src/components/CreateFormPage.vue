<template>
  <div class="top">
    <v-flex>
      <v-card class="container">
        <v-flex>
          <h2>memo form</h2>
          <v-flex style="margin: 24px;" xs12 sm6 offset-sm3>
            <v-textarea v-model="memo" outline label="メモ" /> 
            <v-btn @click="onRegister" :loading="isLoading" color="blue" class="white--text">
              登録
            </v-btn>
          </v-flex>
        </v-flex>
        <v-card class="container">
          <v-flex>
            <h3>登録したmemo</h3>
            <v-flex style="margin: 24px;">
              <v-btn @click="getItem" :laoding="isLoading" color="blue" class="white--text">
                読み込み
              </v-btn>
              <v-data-table 
              :headers="headers" :items="items" :pagination.sync="pagination" no-data-txt=""> 
                <template slot="items" slot-scope="props">
                  <tr>
                    <td>{{ props.item.uid }}</td>
                    <td>{{ props.item.memo }}</td>
                    <td>{{ props.item.createdAt.toDate() | dateformat }}</td>
                    <td>{{ props.item.updatedAt.toDate() | dateformat }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-flex>
          </v-flex>
        </v-card>
      </v-card>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import firebase from 'firebase/app'
import { format } from 'date-fns'

@Component({
  name: 'CreateFormPage',
  filters: {
    dateFormat(date: Date) {
      return format(date, 'YYYY/MM/DD HH:MM:SS');
    },
  },
})

export default class CreateFromPage extends Vue {
  isLoading: boolean = false

  memo: string= ""

  items: any[] = []

  Headers: any[] = [
    { text: 'uid', value: 'uid'},
    { text: 'memo', value: 'memo' },
    { text: 'createdAt', value: 'createdAt'},
    { text: 'updatedAt', value: 'updatedAt'},
  ]
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

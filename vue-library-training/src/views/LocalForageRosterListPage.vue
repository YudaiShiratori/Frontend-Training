<template>
  <div class="top">
    <v-flex>
      <v-card class="container">
        <v-flex>
          <h2>名簿リスト（localforage）</h2>
          <v-flex style="margin: 24px;" xs12 sm6 offset-sm3>
            <v-text-field
              v-model="name"
              label="名前"
              outline
              placeholder="名前"/>
            <v-text-field
              v-model="age"
              label="年齢"
              outline
              type="number"
              placeholder="年齢"/>
            <v-radio-group
              v-model="gender"
              row>
              <v-radio label="男性" value="男性" color="blue"></v-radio>
              <v-radio label="女性" value="女性" color="blue"></v-radio>
            </v-radio-group>
            <v-btn
              @click="onRegist"
              :loading="isLoading"
              color="blue"
              class="white--text">
              {{ getRegistLabel }}
            </v-btn>
            <v-btn
              v-if="isUpdate===true"
              @click="onDelete"
              :loading="isLoading"
              color="red"
              class="white--text">
              削除
            </v-btn>
          </v-flex>
        </v-flex>
        <v-card class="container">
          <v-flex>
            <h3>登録した名簿</h3>
            <v-flex style="margin: 24px;">
              <v-btn
                @click="getItems"
                :loading="isLoading"
                color="blue"
                class="white--text">
                読み込み
              </v-btn>
              <div style="margin: 8px;">
                <p style="color: gray;">リスト内のデータを選択するとそのデータを更新できます。</p>
              </div>
              <v-data-table
                :headers="headers"
                :items="items"
                :pagination.sync="pagination"
                no-data-text="">
                <template
                  slot="items"
                  slot-scope="props">
                  <tr @click="onClick(props.item)">
                    <td>{{ props.item.uid }}</td>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.age }}</td>
                    <td>{{ props.item.gender }}</td>
                    <td>{{ props.item.createdAt | dateFormat }}</td>
                    <td>{{ props.item.updatedAt | dateFormat }}</td>
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
import localforage from 'localforage'
import { format } from 'date-fns'

@Component({
  name: 'LocalForageRosterListPage',
  filters: {
    dateFormat(date: Date) {
      return format(date, 'YYYY/MM/DD HH:mm:ss');
    },
  },
})
export default class LocalForageRosterListPage extends Vue {
  
  localforageKey: string = 'local-forage-lesson'

  isLoading: boolean = false

  name: string = 'ゲスト'
  age: number = 20
  gender: string = '男性'

  items: any[] = []

  pages: number[] = [5, 10, 15, 20, 30]

  headers: any[] = [
    { text: 'uid', value: 'uid'},
    { text: 'name', value: 'name'},
    { text: 'age', value: 'age'},
    { text: 'gender', value: 'gender'},
    { text: 'createdAt', value: 'createdAt'},
    { text: 'updatedAt', value: 'updatedAt'},
  ]

  selectItem: any = undefined
  isUpdate: boolean = false
  selectRowsPerPage: number = 5
  publishedLabel: string = '公開する'
  queryPublishedLabel: string = '公開する'
  pagination: any = {
    sortBy: 'createdAt',
    descending: true,
    rowsPerPage: this.selectRowsPerPage,
  }
  @Watch('selectRowsPerPage')
  onChangeSelectRowsPerPage(newVal: number) {
    this.pagination.rowsPerPage = newVal
  }

  created() {
    localforage.setDriver(localforage.INDEXEDDB)
  }

  async mounted () {
    await this.getItems()
  }

  async onRegist() {
    this.isLoading = true
    if(this.isUpdate === true) {
      await this.update(this.selectItem.uid)
    } else {
      await this.write()
    }
    this.clear()
    this.isLoading = false
  }

  async getItems() {
    console.log('getItems')
    this.isLoading = true
    await this.read()
    this.isLoading = false
  }

  async onDelete() {
    this.isLoading = true
    await this.delete(this.selectItem.uid)
    this.clear()
    this.isLoading = false
  }
  
  onClick(item: any) {
    console.log(item)
    this.selectItem = item
    this.isUpdate = true
    this.setFormData(item)
  }
  
  setFormData(item: any) {
    this.name = item.name
    this.age = item.age
    this.gender = item.gender
  }

  clear() {
    this.name = 'ゲスト'
    this.age = 22
    this.gender = "女性"
    this.selectItem = undefined
    this.isUpdate = false
  }

    /**
   * 登録ラベルを取得
   */
  get getRegistLabel(): string {
    return this.isUpdate === true ? '更新' : '登録'
  }
  /**
   * LocalStorageへデータを書き込む
   * １つのkeyに対してデータを保存する仕様。
   * 配列ごと保存する。
   */
  async write() {
    try {
      const data = {
        uid: this.getDataUid(),
        createdAt: new Date(),
        updatedAt: new Date(),
        name: this.name,
        age: Number(this.age),  // v-text-fieldで入力するとString型になるためNumber型へ変換
        gender: this.gender,
      }
      this.items.push(data)
      console.log('data', this.items)
      await localforage.setItem(this.localforageKey, this.items)
    } catch (error) {
      console.error('database error', error)
    }
  }
  /**
   * LocalStorageからデータを取得
   */
  async read() {
    try {
      const result = await localforage.getItem(this.localforageKey)
      if (result) {
        this.items = result as any[]
      }
      console.log(this.items)
    } catch (error) {
      console.error('database error', error)
    }
  }
  /**
   * LocalStorageのデータを更新
   */
  async update(id: string) {
    try {
      this.items = this.items.map((item: any) => {
        if (item.uid === id) {
          const data: any = item
          data.updatedAt = new Date()
          data.name = this.name
          data.age = Number(this.age)
          data.gender = this.gender
          return data
        }
        return item
      })
      await localforage.setItem(this.localforageKey, this.items)
    } catch (error) {
      console.error('database error', error)
    }
  }
  /**
   * LocalStorageのデータを削除
   * Keyに紐づくデータを全て削除する関数removeItemだが、
   * 中身の細かいデータを削除する場合は削除対象のデータを除いたものを保存する必要がある。
   */
  async delete(id: string) {
    try {
      this.items = this.items.filter((item: any) => item.uid !== id)
      await localforage.setItem(this.localforageKey, this.items)
    } catch (error) {
      console.error('database error', error)
    }
  }
  /**
   * データのuidを取得
   */
  getDataUid(): number {
    if (this.items) {
      let maxNumber = 0
      this.items.forEach((item: any) => {
        if (maxNumber < item.uid) { maxNumber = item.uid }
      })
      return maxNumber + 1
    } else {
      return 0
    }
  }
  /**
   * uidからデータを取得
   */
  // getDataFromUid(uid: string): any {
  //   if (this.items) {
  //     return this.items.filter((element, index, array) => uid === element.uid)[0]
  //   } else {
  //     return undefined
  //   }
  // }

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
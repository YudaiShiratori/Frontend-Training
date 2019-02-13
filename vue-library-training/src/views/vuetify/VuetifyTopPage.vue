<template>
  <div>
    <v-app>
      <v-navigation-drawer 
        fixed
        clipped
        app
        dark
        v-model="isDrawer"
        class="blue lighten-3">
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg>
          <v-list>
            <v-layout wrap column>
              <v-flex>
                <template
                  v-for="(menu, index) in menuList">
                  <v-list-tile :key="index" @click="onClickNavigationItem(menu)">
                    <v-list-tile-action>
                      <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-title>{{ menu.label }}</v-list-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-flex>
            </v-layout>
          </v-list>
        </v-container>
      </v-navigation-drawer>

      <v-toolbar
        dark
        color="blue"
        fixed
        clipped-left
        app>
        <v-toolbar-side-icon @click.stop="isDrawer = !isDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{ toolberTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-container>
        <v-fade-transition>
          <router-view />
        </v-fade-transition>
      </v-container>

      <v-footer
        color="gray"
        app>
        <span>&copy; {{ footerTitle }}</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class VuetifyTopPage extends Vue {
  toolberTitle: string = 'vuetify trainnig'

  footerTitle: string = 'vuetify training 2019'
  isDrawer: boolean = false
  menuList: any[] = [
    {
      to: 'vuetify_child_page1',
      label: 'card sample',
      icon: 'dashboard',
    },
    {
      to: 'vuetify_child_page2',
      label: 'v-list v-dialog sample',
      icon: 'account_box',
    },
    {
      to: 'vuetify_child_page3',
      label: 'v-bottom-nav sample',
      icon: 'gavel',
    },
  ]
  mounted() {
    console.log('VuetifyTopPage')
  }
  onClickNavigationItem(menu: any) {
    this.$router.push({name: menu.to})
  }
}
</script>

<style lang="stylus">
.top
  margin 10px
.container
  text-align left
</style>

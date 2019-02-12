<template>
  <div class="top">
    <p><router-link :to="{ name: 'vue_router_top_page' }">Router</router-link></p>
    <p><router-link :to="{ name: 'vuetify_top_page' }">Vuetify</router-link></p> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
 // @ is an alias to /src
@Component
export default class TopPage extends Vue {}
</script>

<template>
  <div class="top">
    <router-link :to="{ name: 'vue_router_top_page' }">Router</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
 // @ is an alias to /src
@Component
export default class TopPage extends Vue {}
</script>

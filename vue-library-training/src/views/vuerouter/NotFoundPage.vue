<template>
  <div>
    <h1>Not Found</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'NotFoundPage',
})
export default class NotFoundPage extends Vue {
  created() {
    console.log('NotFound')
  }
}
</script>

<style lang="stylus" scoped>
</style>
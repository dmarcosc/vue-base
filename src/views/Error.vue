<template>
  <div class="App">
    <h1>{{ $t('errors.request') }}</h1>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  mounted () {
    this.$store.commit('ui/setSection', 'error')
  }
})

</script>

<style lang="scss" scope>

.App {
  margin-top: 150px;
  text-align: center
}
</style>

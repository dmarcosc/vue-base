<template>
  <v-app id="app">
    <div class="app-container">
      <HeaderBar />
      <LoadMask v-if="maskInfo.show" :text="maskInfo.text" />
      <component
        :is="dialogInfo.component"
        v-model="dialogInfo.open"
        :datos="dialogInfo.props"
        @close="onClose"
      />
      <router-view />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
import LoadMask from '@/components/LoadMask.vue'
export default Vue.extend({
  name: 'App',
  components: {
    HeaderBar,
    LoadMask
  },
  computed: {
    dialogInfo () {
      return this.$store.getters['ui/dialogInfo']
    },
    maskInfo () {
      return this.$store.getters['ui/maskInfo']
    }
  },
  methods: {
    onClose () {
      this.$store.dispatch('ui/closeDialog')
    }
  }
})
</script>
<style lang="scss">
</style>

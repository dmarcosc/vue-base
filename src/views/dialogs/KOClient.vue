<template>
  <AlertDialog v-bind="$attrs" :title="$t('error.connectionError')"
               icon="warning"
               :text="$t('error.koConsultText')"
               :button-text="$t('buttons.tryAgain')"
               @primary="$emit('close')"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import AlertDialog from '@/components/Dialogs/AlertDialog.vue'

export default Vue.extend({
  name: 'KOClient',
  components: {
    AlertDialog
  }
})
</script>

<style lang="scss" scoped>
</style>

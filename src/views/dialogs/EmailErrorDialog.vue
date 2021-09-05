<template>
  <AlertDialog v-bind="$attrs"
               :title="$t('login.error')"
               icon="warning"
               :text="$t('login.error-email')"
               :button-text="$t('buttons.tryAgain')"
               @primary="$emit('close')"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import AlertDialog from '@/components/Dialogs/AlertDialog.vue'

export default Vue.extend({
  name: 'EmailError',
  components: {
    AlertDialog
  }
})
</script>

<style lang="scss" scoped>
</style>

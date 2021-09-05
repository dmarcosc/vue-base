<template>
  <AlertDialog v-bind="$attrs"
               icon="warning"
               :title="$t('login.error')"
               :text="$t('login.error-password')"
               :button-text="$t('buttons.tryAgain')"
               @primary="$emit('close')"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import AlertDialog from '@/components/Dialogs/AlertDialog.vue'

export default Vue.extend({
  name: 'PasswordError',
  components: {
    AlertDialog
  }
})
</script>

<style lang="scss" scoped>
</style>

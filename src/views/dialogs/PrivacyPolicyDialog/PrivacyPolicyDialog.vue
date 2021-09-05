<template>
  <BasicDialog v-bind="$attrs" :title="$t('main.privacyPolicy')" @primary="$emit('close')">
    <template name="content">
      <PrivacyPolicyDialogContent />
    </template>
  </BasicDialog>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicDialog from '@/components/Dialogs/BasicDialog.vue'
import PrivacyPolicyDialogContent from './PrivacyPolicyDialogContent.vue'

export default Vue.extend({
  name: 'PrivacyPolicyDialog',
  components: {
    BasicDialog,
    PrivacyPolicyDialogContent
  }
})
</script>

<style lang="scss" scoped>
</style>

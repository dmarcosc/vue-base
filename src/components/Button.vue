<template>
  <FButton
    v-bind="$attrs"
    :class="{'pass-btn' : (primary&&!disabled),'pass-btn--disabled' : disabled, 'pass-btn-secondary' : (secondary&&!disabled)}"
    @click="!disabled&&$emit('click')"
  >
    <slot />
  </FButton>
</template>

<script lang="ts">
import { FButton } from 'fwkc4-vue'
export default {
  name: 'Button',
  components: {
    FButton
  },
  props: {
    primary: {
      type: Boolean,
      default: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .pass-btn {
    width: 288px;
    max-width: 100%;
    height: 50px;
    text-transform: none;
    background-color: #00cca9 !important;
    border-radius: 50px !important;
    color: white !important;
    font-size: 19px !important;
    line-height: 18px !important;
    font-weight: 600;
    --f-button-icon_color:#ffff !important;
  }
  .pass-btn:active {
     --f-button-icon_color:#ffff !important;
  }
  .pass-btn-secondary:active {
   //color: var(--f-button-active_color,var(#00cca9)) !important;
    --f-button-icon_color:#00cca9 !important;
    --f-button-active_color:#00cca9 !important;
  }
  .pass-btn--disabled {
    width: 288px;
    max-width: 100%;
    height: 50px;
    opacity: 1 !important;
    background-color: #b1efe4 !important;
    text-transform: none;
    border-radius: 50px !important;
    font-size: 19px !important;
    line-height: 18px !important;
    font-weight: 600;
     border-width: 0px;
    //  pointer-events: none;
    }
  .pass-btn-secondary {
    height: 50px;
    max-width: 100%;
    width: 250px;
    text-transform: none;
    background-color: #ffffff !important;
    border: 1px solid #00cca9;
    border-radius: 50px;
    color: #00cca9 !important;
    font-size: 19px !important;
    --f-button-icon_color:#00cca9 !important;
    --f-button-active_color:#00cca9 !important;
    }
</style>

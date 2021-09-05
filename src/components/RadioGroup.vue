<template>
  <FRadioGroup
    v-model="valueData"
    v-bind="$attrs"
    class="pass-radiogroup"
  >
    <slot />
  </FRadioGroup>
</template>

<script lang="ts">
import { FRadioGroup } from 'fwkc4-vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'RadioGroup',
  components: {
    FRadioGroup
  },
  props: {
    value: {
      default: null,
      type: String
    }
  },
  data () {
    return {
      valueData: this.value
    }
  },
  watch: {
    value () {
      this.valueData = this.value
    },
    valueData () {
      this.$emit('input', this.valueData)
    }
  }
})
</script>

<style lang="scss" scoped>
::v-deep
.f-radio-button {
  --f-radio-button__circle__inner_width: 22px !important;
  --f-radio-button__circle__outer_width: 27px !important;
  --f-radio-button__circle__inner_border:none;
  --f-radio-button__circle__inner_background: #00cca9;
 }
 ::v-deep
.mdc-radio__background {
border-color: #e6e6e6 !important;
}
::v-deep
.mdc-radio__outer-circle {
border-color: #e6e6e6 !important;
background: white;
top: -7px;
left: -7px;
}
::v-deep
.mdc-radio__inner-circle {
top: -5px;
left: -4px;
}
::v-deep
label {
  font-size: 22px !important;
  font-weight: normal !important;
  color: rgb(87, 93, 97) !important;
}
</style>

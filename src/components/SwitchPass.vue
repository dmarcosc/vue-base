<template>
  <FSwitch
    v-model="valueData"
    v-bind="$attrs"
    class="switch-pass"
  >
    <slot />
  </FSwitch>
</template>

<script lang="ts">
import { FSwitch } from 'fwkc4-vue'
import Vue from 'vue'
import check from '@/assets/images/check-solid-white.svg'

export default Vue.extend({
  name: 'SwitchPass',
  components: {
    FSwitch
  },
  props: {
    value: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      valueData: this.value,
      check
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
$image_white_check: './../assets/images/check-solid-white.svg';

.switch-pass{
  --mdc-theme-secondary: #fff;
}

::v-deep
.mdc-switch.mdc-switch--checked .mdc-switch__track{
  background-color:#00CCA9;
  background-image: url(/img/check-solid-white.560e2645.svg);
  background-position: 7px;
  width:80px;
  height:35px;
  border-radius: 18px;
}
::v-deep
.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{
  background-color:#808080;
}
::v-deep
.mdc-switch .mdc-switch__track{
  width:80px;
  height:35px;
  border-radius: 18px;
  opacity: 1;
}
::v-deep
.mdc-switch__thumb{
  width:33px;
  height:33px;
}
::v-deep
.mdc-switch--checked .mdc-switch__thumb-underlay{
transform: translateX(42px);
}
::v-deep
.mdc-switch__thumb-underlay{
  left: -5px;
  top: -7px;
  transition: transform 400ms cubic-bezier(.4,0,.2,1),background-color 400ms cubic-bezier(.4,0,.2,1),border-color 400ms cubic-bezier(.4,0,.2,1);
}
::v-deep
.mdc-switch--disabled{
  opacity:1;
}
</style>

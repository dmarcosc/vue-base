<template>
  <label>
    <input v-model="valueData" type="checkbox"
           class="component-checkbox"
           v-bind="$attrs"
           @change="change"
    >
    <span :class="{'required-checkbox' : required}" />
    <img src="./../assets/images/checkbox-checked.png" hidden>
    <img src="./../assets/images/checkbox-unchecked.png" hidden>
    <slot />
  </label>
</template>
<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  name: 'CheckBox',
  props: {
    required: {
      type: Boolean
    },
    value: {
      default: false,
      type: Boolean
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
  },
  methods: {
    change () {
      this.$emit('change')
    }
  }
})
</script>

<style lang="scss" scoped>
$image_checkbox: './../assets/images/checkbox-unchecked.png';
$image_checkbox_checked: './../assets/images/checkbox-checked.png';
$image_checkbox_required: './../assets/images/checkbox-required.png';

span {
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    background:url($image_checkbox) no-repeat;
    cursor: pointer;
  }
  .required-checkbox{
      background:url($image_checkbox_required) no-repeat;
  }
  input {
    display: none;
    &:checked ~ span {
      background:url($image_checkbox_checked) no-repeat;
    }
    &:disabled ~ span {
      border: 1px solid lightgray;
      background:#EBEBE4;
    }
  }

</style>

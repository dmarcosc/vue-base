<template>
  <FCheckbox v-model="valueData"
             v-bind="$attrs"
             class="myCheckbox"
             @click="change"
  />
</template>

<script>
import { FCheckbox } from 'fwkc4-vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'MyCheckBox',
  components: {
    FCheckbox
  },
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
      this.$emit('click')
    },
    click () {
      console.log('Checking checkbox')
    }
  }
})
</script>

<style lang="scss" scoped>
$image_checkbox: './../assets/images/checkbox-unchecked.png';
$image_checkbox_checked: './../assets/images/checkbox-checked.png';
$image_checkbox_required: './../assets/images/checkbox-required.png';

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
  .myCheckbox {
    background-color: red;
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
  ::v-deep
  .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background, .mdc-checkbox__native-control:enabled:unchecked~.mdc-checkbox__background{
    width: 50px;
  }
</style>

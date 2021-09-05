<template>
  <div class="cbx-div">
    <label :class="{'label-cb':!required,'label-cb-required':required}">{{ label }}</label>
    <FCombobox v-model="valueData"
               v-bind="$attrs"
               class="myComboBox"
               :error-help-text="true"
               :error-messages="errorMessages"
               @input="e => $emit('input', e)"
               @search="e => $emit('search', e)"
               @blur="e => $emit('blur', e)"
    >
      <template #trailicon>
        <FIcon v-if="anyValue" name="times-circle"
               color="#a4a4a4" size="lg"
               @click="clearValue"
        />
      </template>
    </FCombobox>
  </div>
</template>

<script>
import { FCombobox, FIcon } from 'fwkc4-vue'

export default {
  name: 'ComboBox',
  components: {
    FCombobox,
    FIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      valueData: this.value,
      errorMessages: {
        required: 'El campo es requerido',
        validNationality: 'Nº de documento no coincide con nacionalidad'
      }
    }
  },
  computed: {
    anyValue () {
      const bool = this.valueData !== ''
      return bool
    }
  },
  watch: {
    value (newVal) {
      this.valueData = newVal
    }
  },
  methods: {
    clearValue () {
      this.valueData = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.cbx-div {
  text-align: left;
  min-width: 130px;
}

.myComboBox.f-combobox {
  --f-combobox_height: 45px;
}

.label-cb, .label-cb-required {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  color: #575d61;
  line-height: 2;
  font-style: normal;
}

.label-cb-required::after {
  color: #00cca9 ;
  content: " *";
}

.cbx-div[invalid] .f-combobox.myComboBox.f-combobox__dense {
  --f-text-field__border:solid 1px #feac12 ;
}

::v-deep
.f-combobox__line-text {
padding-top: 3px
}
::v-deep
.help-text {
  color: #feac12;
  line-height: 16px;
  font-size: 14px;
  font-weight: 800;
  padding: 0px !important;
}
::v-deep
.f-combobox .v-select .vs__dropdown-toggle .vs__selected-options .vs__selected{
  color: #575d61 !important;
}
::v-deep
.vs__clear{
  display:none;
}
::v-deep
.vs__actions{
  cursor:pointer;
  padding-left:7px;
}
::v-deep
.vs__selected-options,.vs__selected-options .vs__selected ,.f-combobox.vs__selected{
  font-size: 19px;
  line-height: 40px;
  color: #575d61 !important;
  font-family: 'Source Sans Pro';
}
::v-deep
.f-combobox-invalid .vs__dropdown-toggle {
  border-color: #feac12;
}
</style>

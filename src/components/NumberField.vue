<template>
  <div class="tf-div">
    <label :class="{'label-field':!required,'label-field-required':required}">{{ label }}</label>
    <FNumberField
      v-model="valueData"
      v-bind="$attrs"
      hide-controls
      class="myNumberField"
      :error-help-text="true"
      :error-messages="errorMessages"
      @input="e => $emit('input', e)"
    >
      <template #trailicon>
        <slot />
      </template>
    </FNumberField>
  </div>
</template>

<script>
import { FNumberField } from 'fwkc4-vue'

export default {
  name: 'NumberField',
  components: {
    FNumberField
  },
  props: {
    value: {
      type: Number,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      valueData: this.value,
      errorMessages: {
        required: 'El campo es requerido',
        validDocument: 'Documento incorrecto o inválido',
        validPhone: 'Teléfono incorrecto o inválido',
        validIBAN: 'Formato IBAN incorrecto o inválido',
        email: 'Correo electrónico incorrecto o inválido',
        year: 'Año inválido [1900-actual]',
        numeric: 'Solo caracteres numéricos',
        alphaNumeric: 'Formato inválido',
        between09: 'Valor inválido',
        minLength6: 'Mínimo 6 caracteres',
        maxLength60: 'Máximo 60 caracteres',
        maxLength35: 'Máximo 35 caracteres',
        maxLength15: 'Máximo 15 caracteres',
        maxLength5: 'Máximo 5 caracteres',
        maxLength4: 'Máximo 4 caracteres',
        maxLength12: 'Máximo 12 caracteres',
        max9999: 'El valor máximo es 9999',
        alphabetical: 'Solo caracteres alfabéticos',
        date: 'Formato de fecha incorrecto',
        minor: 'Menor de edad',
        minDate: 'No puede ser menor del día actual'
      }
    }
  },
  watch: {
    value (newVal) {
      this.valueData = newVal
    }
  }
}
</script>

<style lang="scss" scoped>

.tf-div {
  text-align: left;
}

.myNumberField.f-number-field {
  --f-text-field__height: 45px;
  --f-text-field-input__font-size: 20px;
  --mdc-theme-error:#feac12;
}
::v-deep
.f-number-field__dense input{
  color:#575d61;
}

.label-field, .label-field-required {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  color: #575d61;
  line-height: 2;
}

.label-field-required::after {
  color: #00cca9 ;
  content: " *";
}

::v-deep
.f-number-field__line-text {
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
.f-number-field__trailicon{
  color:#969696;
  font-size: 28px;
  line-height: 35px;
  font-weight: 800;
  margin-right:20px;
}
</style>

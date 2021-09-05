<template>
  <div class="tf-div">
    <label :class="{'label-field':!required,'label-field-required':required}">{{ label }}</label>
    <FTextField
      v-model="valueData"
      v-bind="$attrs"
      class="myTextField"
      :error-help-text="true"
      :error-messages="errorMessages"
      @input="e => $emit('input', e)"
      @blur="e => $emit('blur', e)"
    >
      <template #trailicon>
        <FIcon v-if="anyValue" name="times-circle"
               color="#a4a4a4" size="lg"
               @click="clearValue"
        />
      </template>
    </FTextField>
  </div>
</template>

<script>
import { FTextField, FIcon } from 'fwkc4-vue'

export default {
  name: 'TextField',
  components: {
    FTextField,
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
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      valueData: this.value
    }
  },
  computed: {
    anyValue () {
      const bool = this.valueData !== ''
      return bool
    },
    errorMessages () {
      return {
        required: 'El campo es requerido',
        validDocument: 'Documento incorrecto o inválido',
        validPhone: 'Teléfono incorrecto o inválido',
        validIBAN: 'Formato IBAN incorrecto o inválido',
        email: 'Correo electrónico incorrecto o inválido',
        email2: 'Correo electrónico incorrecto o inválido',
        year: 'Año inválido [1900-actual]',
        numeric: 'Solo caracteres numéricos',
        alphaNumeric: 'Formato inválido',
        between09: 'Valor inválido',
        minLength5: 'Exactamente 5 dígitos',
        maxLength60: 'Máximo 60 caracteres',
        maxLength40: 'Máximo 40 caracteres',
        maxLength35: 'Máximo 35 caracteres',
        maxLength15: 'Máximo 15 caracteres',
        maxLength5: 'Máximo 5 caracteres',
        maxLength4: 'Máximo 4 caracteres',
        minLength6: 'Mínimo 6 caracteres',
        minLength9: 'Exactamente 9 caracteres',
        maxLength9: 'Exactamente 9 caracteres',
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
    },
    lang () {
      return this.i18n.locale
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

.tf-div {
  text-align: left;
}

.myTextField.f-textfield {
  --f-text-field__height: 45px;
  --f-text-field-input__font-size: 20px;
}
::v-deep
.f-textfield__dense input{
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
.f-textfield__invalid .f-textfield__content {
  border-color: #feac12;
}

::v-deep
.f-textfield__line-text {
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
</style>

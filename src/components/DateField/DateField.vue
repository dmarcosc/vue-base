<template>
  <div class="datef-div">
    <label :class="{'label-field':!required,'label-field-required':required}">{{ label }}</label>
    <FDateField
      v-model="valueData"
      v-bind="$attrs"
      class="myDateField"
      :error-help-text="true"
      :error-messages="errorMessages"
      @input="e => $emit('input', e)"
    >
      <template #picker />
    </FDateField>
  </div>
</template>

<script>
import { FDateField } from 'fwkc4-vue'
export default {
  name: 'DateField',
  components: {
    FDateField
  },
  props: {
    value: {
      type: Date,
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
        alphaNumeric: 'Formato inválido',
        between09: 'Valor inválido',
        maxLength60: 'Máximo 60 caracteres',
        max9999: 'El valor máximo es 9999',
        date: 'Formato de fecha incorrecto',
        minor: 'Menor de edad',
        minDate: 'No puede ser menor del día actual',
        maxDate: 'No puede ser mayor del día actual',
        betweenDate: 'Fecha comprendida entre [1900-actual]'
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
      this.valueData = null
    }
  }
}
</script>

<style lang="scss" scoped>

.datef-div {
  text-align: left;
}
::v-deep
.f-textfield__content{
  height: 45px;
  font-size: 20px;
}
::v-deep
.f-textfield__input input{
    font-size: 20px;
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

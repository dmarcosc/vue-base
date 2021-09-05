<template>
  <div class="form">
    <div class="flip-card">
      <FlippingCard :title="$t('home.forms')" :front-text="$t('home.formsText')" />
    </div>
    <div class="card">
      <h1>{{ $t('form.title-a') }}</h1>
      <h1>{{ $t('form.title-b') }}</h1>
      <h4>{{ $t('form.sub-title') }}</h4>
      <div class="login-form">
        <div class="file-input">
          <div>
            <TextField
              v-model="$v.name.$model"
              required
              clearable
              :label="$t('form.name')"
              :validations="$v.name"
              :invalid="$v.name.$invalid"
              :dirty="$v.name.$dirty"
            />
            <TextField
              v-model="$v.id.$model"
              required
              clearable
              :label="$t('form.id')"
              :validations="$v.id"
              :invalid="$v.id.$invalid"
              :dirty="$v.id.$dirty"
            />
            <TextField
              v-model="$v.phone.$model"
              required
              clearable
              :label="$t('form.phone')"
              :validations="$v.phone"
              :invalid="$v.phone.$invalid"
              :dirty="$v.phone.$dirty"
            />
            <TextField
              v-model="$v.email.$model"
              required
              clearable
              :label="$t('form.email')"
              :validations="$v.email"
              :invalid="$v.email.$invalid"
              :dirty="$v.email.$dirty"
              :disabled="isDisabled"
            />
            <DateField
              v-model="$v.date.$model"
              required
              clearable
              :label="$t('form.date')"
              :validations="$v.date"
              :invalid="$v.date.$invalid"
              :dirty="$v.date.$dirty"
            />
            <ComboBox
              v-model="$v.selectedCountry.$model"
              required
              clearable
              :label="$t('form.country')"
              :validations="$v.selectedCountry"
              :invalid="$v.selectedCountry.$invalid"
              :dirty="$v.selectedCountry.$dirty"
              :items="$t('form.countries')"
            />
          </div>
          <div class="field-item">
            <div class="checkboxes">
              <CheckBox v-model="checkbox" required />
              {{ $t('form.accept-policy-a') }}<span class="link" @click="displayDialog">{{ $t('form.accept-policy-b') }}</span>
            </div>
          </div>
          <div class="button">
            <Button primary :disabled="$v.$invalid||!checkbox" @click="getClient">
              {{ $t('buttons.continue') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
import ComboBox from '@/components/ComboBox.vue'
import CheckBox from '@/components/CheckBox.vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import DateField from '@/components/DateField/DateField.vue'
import getCliente from '@/services/getCliente/getCliente.service'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { validateDocument, validateCellphone, underage } from '@/utils/validations'
import PrivacyPolicyDialog from './dialogs/PrivacyPolicyDialog/PrivacyPolicyDialog.vue'
import ClientRequestDTO from '@/api/getCliente/dto/clientRequestDTO'
import FlippingCard from '@/components/FlippingCard.vue'

export default Vue.extend({
  name: 'Form',
  components: {
    ComboBox,
    CheckBox,
    Button,
    TextField,
    DateField,
    FlippingCard
  },
  data () {
    return {
      name: '',
      id: '',
      date: new Date(),
      email: this.$store.getters['session/client'].email,
      phone: '',
      countries: [],
      selectedCountry: '',
      disabled: false,
      checkbox: false
    }
  },
  validations () {
    return {
      name: {
        required: required,
        minLength6: minLength(6),
        maxLength40: maxLength(40)
      },
      selectedCountry: {
        required: required
      },
      id: {
        required: required,
        validDocument: validateDocument
      },
      phone: {
        required: required,
        validPhone: validateCellphone
      },
      email: {
        required: required,
        email: email
      },
      date: {
        required: required,
        minor: underage
      }
    }
  },
  computed: {
    isDisabled () {
      return this.$store.getters['session/client'].email !== ''
    }
  },
  mounted () {
    if (window.localStorage.getItem('token') === null) {
      this.$router.push('/login')
    }
    this.$store.commit('ui/setSection', 'forms')
  },
  methods: {
    setDisabled () {
      return true
    },
    displayDialog () {
      this.$store.dispatch('ui/openDialog', {
        component: PrivacyPolicyDialog
      })
    },
    async getClient () {
      const request: ClientRequestDTO = {
        email: this.email
      }
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      try {
        const formData = {
          nombre: this.name,
          id: this.id,
          date: this.date,
          phone: this.phone,
          email: this.email,
          country: this.selectedCountry
        }
        this.$store.dispatch('session/saveClient', {
          clientData: formData
        })
        const response = await getCliente(request)
        this.$store.dispatch('session/saveClient', {
          clientData: response
        })
        this.$router.push('/client')
      } catch (error) {
        this.$router.push('/error')
      } finally {
        this.$store.dispatch('ui/hideMask')
      }
    }
  }
})
</script>

<style lang="scss" scope>

.form {
  background-color: lightgray;
  display:flex;
  justify-content: center;
  overflow: hidden !important;
  min-height: 100vh;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}
.card {
    margin:100px 0px 40px 0px;
    width: 40%;
    box-shadow: 1px 1px gray;
    background-color: white;
    text-align: center;
    padding: 5%;
}
.flip-card {
    margin:100px 0px 40px 0px;
    text-align: center;
    padding-right: 5%;
}
.field-input {
  border: 1.5px solid lightgray;
  margin-bottom: 20px;
  width: 100%;
}

.field-item {
  margin-top: 35px;
  width: 100%;
}

.checkboxes {
  margin-bottom: 20px;
  text-align: left;
  font-family: sans-serif;
}

.button {
  margin-bottom: 20px;
}

.login-form{
  display:inline-block;
  margin-top: 20px;
}

.file-input {
  columns: auto 1;
}

.link {
  color: #00CCA9;
  font-weight: 700;
  text-decoration: none;
  cursor:pointer;

}

h1 {
  text-align: center;
  color: darkblue;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 30px;
}

h4 {
  text-align: center;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: lighter;
}

</style>

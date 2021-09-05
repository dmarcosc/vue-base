<template>
  <div class="form">
    <div class="flip-card">
      <FlippingCard title="Login" :front-text="$t('home.loginText')" />
    </div>
    <div class="card">
      <h1>{{ $t('header.login') }}</h1>
      <h4>{{ $t('login.subtitle') }}</h4>
      <div class="login-form">
        <div class="file-input">
          <div>
            <TextField
              v-model="$v.email.$model"
              required
              clearable
              :label="$t('login.email')"
              :validations="$v.email"
              :invalid="$v.email.$invalid"
              :dirty="$v.email.$dirty"
            />
            <TextField
              v-model="$v.password.$model"
              required
              clearable
              password
              :label="$t('login.password')"
              :validations="$v.password"
              :invalid="$v.password.$invalid"
              :dirty="$v.password.$dirty"
            />
          </div>
          <div class="button">
            <Button primary :disabled="$v.$invalid" @click="login">
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
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import { required, email } from 'vuelidate/lib/validators'
import LoginRequestDTO from '@/api/login/dto/LoginRequestDTO'
import login from '@/services/login/login.service'
import EmailErrorDialog from './dialogs/EmailErrorDialog.vue'
import PasswordErrorDialog from './dialogs/PasswordErrorDialog.vue'
import ClientRequestDTO from '@/api/getCliente/dto/clientRequestDTO'
import getCliente from '@/services/getCliente/getCliente.service'
import FlippingCard from '@/components/FlippingCard.vue'

export default Vue.extend({
  name: 'Form',
  components: {
    Button,
    TextField,
    FlippingCard
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations () {
    return {
      email: {
        required: required,
        email: email
      },
      password: {
        required: required
      }
    }
  },
  mounted () {
    this.$store.commit('ui/setSection', 'login')
  },
  methods: {
    setDisabled () {
      return true
    },
    displayAlertEmail () {
      this.$store.dispatch('ui/openDialog', {
        component: EmailErrorDialog
      })
    },
    displayAlertPassword () {
      this.$store.dispatch('ui/openDialog', {
        component: PasswordErrorDialog
      })
    },
    async login () {
      const request: LoginRequestDTO = {
        email: this.email,
        password: this.password
      }
      try {
        const response = await login(request)
        if (response.token === 'error-email') {
          this.displayAlertEmail()
        } else if (response.token === 'error-psswd') {
          this.displayAlertPassword()
        } else {
          this.$store.dispatch('ui/showMask', {
            text: this.$t('main.retrievingData')
          })
          const formData = {
            email: this.email
          }
          this.$store.dispatch('session/saveClient', {
            clientData: formData
          })
          window.localStorage.setItem('token', JSON.stringify(response.token))
          const request: ClientRequestDTO = {
            email: this.email
          }
          const response2 = await getCliente(request)
          this.$store.dispatch('session/saveClient', {
            clientData: response2
          })
          this.$router.push('/form')
        }
      } catch (error) {
        this.$router.push('/error')
      } finally {
        window.setTimeout(() => { this.$store.dispatch('ui/hideMask') }, 2000)
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

a:link {
  color: #00CCA9;
  font-family: sans-serif;
  text-decoration: none;
}

a:visited {
  color: #9c3d98;
  font-family: sans-serif;
  text-decoration: none;
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

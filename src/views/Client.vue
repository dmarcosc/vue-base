<template>
  <div class="form">
    <div class="card">
      <h1>{{ $t('form.client-title') }}</h1>
      <div id="demo">
        <div class="login-form">
          <div class="file-input">
            <div>
              <div>
                <label class="data-label">
                  {{ $t('form.name') }}
                </label>
                <dd>
                  {{ client.nombre }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.id') }}
                </label>
                <dd>
                  {{ client.id }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.phone') }}
                </label>
                <dd>
                  {{ client.phone }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.email') }}
                </label>
                <dd>
                  {{ client.email }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.date') }}
                </label>
                <dd>
                  {{ showDate() }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.country') }}
                </label>
                <dd>
                  {{ client.country }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.nSeguridadSocial') }}
                </label>
                <dd>
                  {{ client.nSeguridadSocial }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.direccion') }}
                </label>
                <dd>
                  {{ client.direccion }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.edad') }}
                </label>
                <dd>
                  {{ client.edad }}
                </dd>
              </div>
              <div>
                <label class="data-label">
                  {{ $t('form.nacionalidad') }}
                </label>
                <dd>
                  {{ client.nacionalidad }}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
import moment from 'moment'

export default Vue.extend({
  name: 'Client',
  components: {
  },
  computed: {
    client: function () {
      return this.$store.getters['session/client']
    }
  },
  mounted () {
    this.$store.commit('ui/setSection', 'client')
    if (window.localStorage.getItem('token') === null) {
      this.$router.push('/login')
    }
  },
  methods: {
    click () {
      console.log('works')
    },
    showDate () {
      const formatter = 'DD-MM-YYYY'
      return moment(this.client.date).format(formatter)
    }
  }
})
</script>

<style lang="scss" scope>

.form {
  margin-top: 80px;
  background-color: lightgray;
  padding: 80px;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  text-align: center;
  display:flex;
  justify-content: center;
}
.card {
    width: 40%;
    box-shadow: 1px 1px gray;
    background-color: white;
    text-align: center;
    padding: 5%;
    overflow: hidden
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

.prueba-card {
  max-width: 700px;
  width: 95%;
  margin: auto;
  margin-top: 30px;
  height: 90%;
  box-shadow: 1px 1px gray;
  padding: 60px 5%;
  background-color: white;
  display: block;
  text-align: center
}

.data-label {
  color: rgb(76, 70, 134);
}
</style>

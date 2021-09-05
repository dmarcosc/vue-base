<template>
  <div class="components">
    <div class="card-example">
      <h2 class="inner-title">
        {{ $t('home.components') }}
      </h2>
      <div class="inner-div">
        <p style="margin-right:20px;">
          {{ $t('home.componentsText1') }}<a target="_blank" href="https://guia-de-estilos-dev.npapps.ocp.es.wcorp.carrefour.com">{{ $t('home.here') }}</a>
          {{ $t('home.componentsText2') }}<a target="_blank" href="https://vuetifyjs.com/">Vuetify</a>{{ $t('home.componentsText3') }}
          <br>
          {{ $t('home.componentsText4') }}
        </p>
      </div>
      <Button class="small-button" primary @click="toPlayground">
        {{ $t('buttons.playground') }}
      </Button>
    </div>
    <div class="card-example">
      <h2 class="inner-title">
        {{ $t('home.dialogs') }}
      </h2>
      <div class="inner-div">
        <p>
          {{ $t('home.dialogsText1') }}
        </p>
      </div>
      <div class="dialog-buttons">
        <Button class="small-button" primary @click="displayAlert">
          {{ $t('buttons.alert') }}
        </Button>
        <Button class="small-button" primary @click="displayDialog">
          {{ $t('buttons.dialog') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import KOClientVue from './dialogs/KOClient.vue'
import PrivacyPolicyDialog from './dialogs/PrivacyPolicyDialog/PrivacyPolicyDialog.vue'

export default Vue.extend({
  name: 'Components',
  components: {
    Button
  },
  mounted () {
    this.$store.commit('ui/setSection', 'components')
  },
  methods: {
    toPlayground () {
      this.$router.push('/playground')
    },
    displayAlert () {
      this.$store.dispatch('ui/openDialog', {
        component: KOClientVue
      })
    },
    displayDialog () {
      this.$store.dispatch('ui/openDialog', {
        component: PrivacyPolicyDialog
      })
    }
  }
})
</script>

<style lang="scss" scope>
.components{
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 80px);
  align-items: center;
  flex-direction: row;
  font-size: 25px;
  margin-top:80px;
  padding:0em 1em;
  flex-wrap: wrap;
}
.card-example{
  background-color: #fff;
  max-width: 800px;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  padding:1em;
  margin:2em ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  align-items: center;
}
.inner-title{
margin-bottom:1em;
}
.inner-div{
display: flex;
}
.inner-img{
  height:140px;
}
.small-button{
  width:130px !important;
  height: 35px !important;
  margin:10px 0px;
}
.dialog-buttons{
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:100%;
}
</style>

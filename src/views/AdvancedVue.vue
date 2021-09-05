<template>
  <div class="advanced">
    <div class="card-example">
      <h2 class="inner-title">
        {{ $t('home.routing') }}
      </h2>
      <div class="advanced-inner-div">
        <p style="margin-right:20px;">
          {{ $t('home.routingText1') }}
        </p>
        <p>
          <img class="inner-img" src="../assets/images/routing.png">
          {{ $t('home.routingText2') }}<b>{{ $t('home.routingExample1') }}</b>
          <br>
          {{ $t('home.routingText3') }}<a target="_blank" href="https://router.vuejs.org/guide/">{{ $t('home.here') }}</a>
        </p>
      </div>
    </div>
    <FlippingCard :title="$t('home.store')" :front-text="$t('home.storeText1')"
                  :image="store"
                  large
    />
    <FlippingCard :title="$t('home.api')" :front-text="$t('home.apiText1')"
                  :image="api"
                  large
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FlippingCard from '@/components/FlippingCard.vue'
import store from '../assets/images/store.png'
import api from '../assets/images/api.png'

export default Vue.extend({
  name: 'AdvancedVue',
  components: {
    FlippingCard
  },
  data () {
    return {
      store,
      api
    }
  },
  mounted () {
    this.$store.commit('ui/setSection', 'advanced')
  }
})
</script>

<style lang="scss" scope>
.advanced{
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: space-around;
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
  margin:2em 0em;
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
.advanced-inner-div{
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
@media (max-width: 750px){
  .advanced-inner-div{
    flex-direction: column;
  }
}
</style>

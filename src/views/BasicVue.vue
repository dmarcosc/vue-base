<template>
  <div class="basic">
    <FlippingCard :title="$t('home.structure')" :front-text="$t('home.structureText1')" :image="structure" />
    <FlippingCard :title="$t('home.lifeCycles')" :front-text="$t('home.lifeCyclesText1')" :image="cycles" />
    <FlippingCard :title="$t('home.directives')" :front-text="$t('home.directivesText1')"
                  :image="directives"
                  large
    />
    <div class="basic-card">
      <h2 class="basic-inner-title">
        {{ $t('home.events') }}
      </h2>
      <div class="basic-inner-div">
        <p style="margin-right:20px;">
          {{ $t('home.eventsText1') }}<b>{{ $t('home.eventsExample1') }}</b>
          {{ $t('home.eventsText2') }} <b>{{ $t('home.eventsExample2') }}</b> {{ $t('home.info') }}<a target="_blank" href="https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events">{{ $t('home.here') }}</a>
        </p>
        <div class="counter-example">
          {{ $t('home.counter') }}
          <Button class="small-button" :primary="true" @click="increaseCounter">
            +1
          </Button>
          <p class="counter-p">
            {{ contador }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import FlippingCard from '@/components/FlippingCard.vue'
import structure from '../assets/images/schema.png'
import cycles from '../assets/images/lifecycles.png'
import directives from '../assets/images/directives.png'

export default Vue.extend({
  name: 'BasicVue',
  components: {
    Button,
    FlippingCard
  },
  data () {
    return {
      contador: 0,
      structure,
      cycles,
      directives
    }
  },
  mounted () {
    this.$store.commit('ui/setSection', 'basic')
  },
  methods: {
    increaseCounter () {
      this.contador++
    },
    toComponents () {
      this.$router.push('/components')
    }
  }
})
</script>

<style lang="scss" scope>
.basic{
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  display: flex;
  min-height: calc(100vh - 80px);
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  font-size: 25px;
  margin-top:80px;
  padding:0em 1em;
  flex-wrap: wrap;
}
.basic-card{
  max-width: 800px;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  padding:1em;
  margin-bottom:60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  align-items: center;
  background-color: #fff;
}
.basic-inner-title{
margin-bottom:1em;
}
.basic-inner-div{
display: flex;
}
.small-button{
  width:130px !important;
  height: 35px !important;
  margin:10px 0px;
}
.counter-example{
  border: 1px solid black;
  padding:1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom:60px;
}
@media (max-width: 750px){
  .basic-inner-div{
    flex-direction: column;
  }
}
</style>

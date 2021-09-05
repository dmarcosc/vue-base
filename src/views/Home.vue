<template>
  <div class="home">
    <div class="menu-container">
      <Button class="main-menu-button" secondary @click="toBasic">
        <font-awesome-icon class="main-icon" size="2x" :icon="['far', 'lightbulb']" />
        <br>
        {{ $t('header.basic') }}
      </Button>
      <Button class="main-menu-button" secondary @click="toComponents">
        <font-awesome-icon class="main-icon" size="2x" :icon="['fas', 'tools']" />
        <br>
        {{ $t('header.components') }}
      </Button>
      <Button class="main-menu-button" secondary @click="toAdvanced">
        <font-awesome-icon class="main-icon" size="2x" :icon="['fas', 'code-branch']" />
        <br>
        {{ $t('header.advanced') }}
      </Button>
      <Button class="main-menu-button" secondary @click="toForms">
        <font-awesome-icon class="main-icon" size="2x" :icon="['far', 'file-alt']" />
        <br>
        {{ $t('header.forms') }}
      </Button>
      <Button class="main-menu-button" secondary @click="toPlayground">
        <font-awesome-icon class="main-icon" size="2x" :icon="['fas', 'futbol']" />
        <br>
        {{ $t('header.playground') }}
      </Button>
      <Button class="main-menu-button" secondary @click="toTests">
        <font-awesome-icon class="main-icon" size="2x" :icon="['fas', 'flask']" />
        <br>
        {{ $t('header.tests') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Button
  },
  mounted () {
    this.$store.commit('ui/setSection', 'main')
  },
  methods: {
    toBasic () {
      this.$router.push('/basic')
    },
    toComponents () {
      this.$router.push('/components')
    },
    toAdvanced () {
      this.$router.push('/advanced')
    },
    toPlayground () {
      this.$router.push('/playground')
    },
    toTests () {
      this.$router.push('/tests')
    },
    toForms () {
      this.$router.push('/form')
    }
  }
})
</script>

<style lang="scss" scope>
.home{
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
@media (min-width: 750px){
  .home{
    height: calc(100vh - 80px) !important; // cuidao
  }
}
.menu-container{
  margin-bottom:300px;
  max-width: 660px;
  padding:1em;
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-between;
}
.main-menu-button{
  margin-top:1.5em;
  height: 170px !important;
  width: 180px !important;
}
.main-icon{
  margin-bottom:5px;
}
</style>

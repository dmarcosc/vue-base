<template>
  <header class="main-toolbar">
    <nav class="nav_panel">
      <div class="nav_panel-left" @click="goToHome">
        <FIcon class="icon-home" name="home"
               size="2x"
               color="white"
        />
        <label v-if="!isMobile" class="icon-label">
          {{ $t('header.home') }}
        </label>
      </div>
      <div class="nav_panel-center">
        <span class="nav-title">{{ title }}<img class="nav-logo" src="../assets/logo.svg"></span>
      </div>
      <div class="nav_panel-right">
        <RadioGroup v-model="$i18n.locale" name="language-radio" class="nav-radio">
          <FRadioButton value="es">
            {{ $t('buttons.es') }}
          </FRadioButton>
          <FRadioButton value="en">
            {{ $t('buttons.en') }}
          </FRadioButton>
        </RadioGroup>
        <button class="logout-button" @click="logout">
          <FIcon class="icon-home" name="power-off"
                 size="2x"
                 color="white"
          />
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { FIcon, FRadioButton } from 'fwkc4-vue'
import RadioGroup from '@/components/RadioGroup.vue'
import imgSfc from '@/assets/images/sfcLogo.png'

export default Vue.extend({
  name: 'HeaderBar',
  components: {
    FIcon,
    FRadioButton,
    RadioGroup
  },
  data: () => ({
    imgSfc,
    isMobile: false
  }),
  computed: {
    section (): string {
      return this.$store.getters['ui/section']
    },
    title (): string {
      switch (this.section) {
        case 'main':
          return this.$t('header.menu') as string
        case 'basic':
          return this.$t('header.basic') as string
        case 'components':
          return this.$t('header.components') as string
        case 'advanced':
          return this.$t('header.advanced') as string
        case 'playground':
          return this.$t('header.playground') as string
        case 'forms':
          return this.$t('header.forms') as string
        case 'client':
          return this.$t('header.client') as string
        case 'login':
          return this.$t('header.login') as string
        case 'error':
          return this.$t('header.error') as string
        case 'tests':
          return this.$t('header.tests') as string
        default:
          return this.$t('header.default') as string
      }
    }
  },
  mounted () {
    this.checkIsMobile()
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkIsMobile)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    checkIsMobile () {
      this.isMobile = window.innerWidth < 550
    },
    goToHome () {
      if (this.$router.currentRoute.path === '/') return
      this.$router.push('/').catch((err: string) => { return err })
    },
    logout () {
      window.localStorage.removeItem('token')
      this.$store.dispatch('session/removeClient')
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>
.main-toolbar{
  z-index: 7;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;;
  height: 80px;
  font-family:"Source Sans Pro";
  padding: 20px;
  background-color: #062a73;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  position: fixed;
}
.nav-title{
  font-size: 30px;
}
.logout-button{
  text-decoration: none;
  outline: none;
}
::v-deep
.f-radio-button.mdc-form-field{
  margin-right: 10px;
}
::v-deep
.mdc-form-field>label{
  font-size: 14px !important;
  color: #fff !important;
}
.nav_panel {
  width: 100%;
  display: flex;

  &-left {
    display: flex;
    flex: 4;
    align-items: center;
  }

  &-center {
    display: flex;
    flex: 5;
    align-items: center;
    justify-content: center;
  }

  &-right {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.nav-logo{
  height: 36px;
  width: 33px;
}
.icon-home {
    height: 36px;
    width: 44px;
    vertical-align: bottom;
    margin-right: 10px;
    cursor:pointer;
}
.icon-label{
  cursor:pointer;
}
.nav-radio{
  margin-right: 1em;
}
@media (max-width: 600px){
  .main-toolbar{
  font-size: 12px !important;
}
.nav-title{
  font-size: 16px;
}
.nav-logo{
  height: 22px;
  width: 20px;
}
.nav_panel-center{
margin-right: 3em;
}
}
</style>

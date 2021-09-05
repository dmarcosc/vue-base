<template>
  <div class="content">
    <div ref="view"
         :class="{'view-404' : is404Mobile, 'view' : !is404Mobile }"
    >
      <slot />
    </div>
    <div v-if="!isMobile" :style="footerStyle"
         :class="{'footer-404Mobile' : is404Mobile, 'footer' : !is404Mobile }"
    >
      <div class="
         container"
      >
        <div v-if="disablePolicyLink()">
          <button class="text linkCookies" @click="toCookiesPolicy">
            {{ $t('footer.cookies') }}
          </button>
        </div>
        <div>
          <label class="text">
            {{ $t('footer.footerHelp') }}</label>
        </div>
        <div>
          <label class="text">
            {{ $t('footer.footerText') }}</label>
        </div>
        <div class="flexbox-phone">
          <div>
            <v-img
              width="32"
              height="32"
              :src="photoPhone"
            />
          </div>
          <label class="phone-text">
            {{ $t('footer.footerPhone') }}</label>
        </div>
      </div>
    </div>
    <div v-if="isMobile && !is404Mobile" class="footer-mobile">
      <span class="footer-mobile-text">{{ $t('footer.footerText') }}</span>
      <span class="footer-mobile-phone">{{ $t('footer.footerPhone') }}</span>
    </div>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'
import photoPhone from '@/assets/images/phone-grey.svg'

export default {
  name: 'FooterBar',
  props: {
    fixHeight: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    heightFooter: 0,
    photoPhone,
    isMobile: false,
    is404Mobile: false
  }),
  computed: {
    footerStyle () {
      return {
        height: `${this.heightFooter}px`
      }
    }
  },
  updated () {
    this.error404Style()
    this.disablePolicyLink()
  },
  mounted () {
    const vueElement = this.$refs.view
    const windowLocal = window

    const myObserver = new ResizeObserver(() => {
      this.updateHeightFooter(vueElement, windowLocal)
    })
    myObserver.observe(vueElement)
    this.checkIsMobile()
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkIsMobile)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    error404Style () {
      if (this.$router.currentRoute.name === 'Error404' && ((window.innerHeight < 800) ||
      (window.innerHeight > 1300) || (window.innerWidth < 600))) {
        this.is404Mobile = true
      }
    },
    disablePolicyLink () {
      if ((this.$router.currentRoute.path === '/cookiesPolicy') || (this.$router.currentRoute.path === '/cookiesConfig')) {
        return false
      } else return true
    },
    checkIsMobile () {
      this.isMobile = window.innerWidth < 550
    },
    updateHeightFooter (vueElement, windowLocal) {
      const heightView = vueElement.clientHeight
      const heightWindow = windowLocal.innerHeight
      const heightCalculated = heightWindow - heightView - this.fixHeight + 30
      const heightFooter = heightCalculated > 0 ? heightCalculated : 0
      this.heightFooter = heightFooter
    },
    toCookiesPolicy () {
      if (this.$router.currentRoute.path === '/cookiesPolicy') {

      } else {
        this.$router.push('/cookiesPolicy')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  margin: auto;
  margin-bottom: -30px;
  position: relative;
}
.view-404 {
  height: calc(100vh - 80px);
  margin: auto;
  position: relative;
}
.footer {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 200px;
    background-color: #062a73;
    z-index: -1;
    .text {
        font-size: 18px;
        color: #ffffff;
    }
    .phone-text {
        font-size: 24px;
        color: #ffffff;
        margin-left: 10px;
    }
}
.linkCookies {
    color: #00CCA9 !important;
    font-weight: 600;
    cursor: pointer;
    outline:none;
  }
.container {
    margin: 0;
    margin-left: 5%;
    height: 100px;
}

.flexbox-phone {
    align-items: flex-end;
    display: flex;
}
.footer-mobile{
  margin-top:40px;
  color: #2f2f2f;
  font-size: 14px;
   z-index: -1;
}
.footer-mobile-text{
  text-align: left;
}
.footer-mobile-phone{
  float:right;
}
.footer-404Mobile{
  display: none;
}
</style>

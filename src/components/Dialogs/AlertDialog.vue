<template>
  <f-dialog ref="dialog" :class="{'alert-dialog-pass warning-img' : (icon==='warning'),'alert-dialog-pass error-img' : (icon==='error'),'alert-dialog-pass face-img' : (icon==='face')}"
            :title="title"
            :icon-name="icon"
  >
    <template slot="content">
      <label class="alert-dialog-text-label">{{ text }}</label>
      <slot />
    </template>
    <template slot="footer">
      <div :class="{'alert-dialog-pass-two-buttons':twoButtons}">
        <Button v-if="twoButtons" size="sm"
                secondary
                @click="secondary"
        >
          {{ buttonText2 }}
        </Button>
        <Button size="sm" @click="primary">
          {{ buttonText }}
        </Button>
      </div>
    </template>
  </f-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import { FDialog } from 'fwkc4-vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import warning from '../../assets/images/warning.svg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import info from '../../assets/images/info.svg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import face from '../../assets/images/face.svg'

export default Vue.extend({
  name: 'AlertDialog',
  components: {
    Button,
    FDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Cerrar'
    },
    buttonText2: {
      type: String,
      default: 'Continuar'
    },
    twoButtons: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      const dialog: any = this.$refs.dialog
      dialog.toogleOpen()
    }
  },
  mounted () {
    if (this.value) {
      const dialog: any = this.$refs.dialog
      dialog.toogleOpen()
    }
  },
  methods: {
    primary () {
      this.$emit('primary')
    },
    secondary () {
      this.$emit('secondary')
    }
  }
})
</script>

<style lang="scss">

.alert-dialog-pass.mdc-dialog .mdc-dialog__surface {
  display: flex;
  align-items: center;
  padding: 30px;
}

.alert-dialog-pass.dialog .mdc-dialog__title-inner.icon .f-icon {
  width:100%;
  height:70px;
  background-position: center !important;
  margin-bottom: 20px;
}

.alert-dialog-pass .mdc-dialog__actions {
  justify-content: center;
}

.alert-dialog-pass .mdc-dialog__title{
  display: block !important;
  top:-7px;
}
.alert-dialog-pass.dialog .mdc-dialog__title-inner.icon{
  text-align: center;
  justify-content: center;
}

//title
.alert-dialog-pass .mdc-dialog__title .mdc-dialog__title-inner {
  text-align: center;
  font-size: 28px;
  color: #062a73;
  line-height: 28px;
  border-bottom:none;
  padding-left: 0 !important;
  @media  screen and (max-width : 400px) {
    font-size: 23px;
  }
}

.alert-dialog-pass.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions, .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{
  border-color:white;
}

//texto
.alert-dialog-pass .mdc-dialog__content{
  text-align: center;
  padding:0 !important;
  margin-bottom: 10px;
}
.alert-dialog-text-label{
   font-size: 19px !important;
    font-weight: 600 !important;
    line-height: 22px !important;
    color: #575d61 !important;
}

//botones
.alert-dialog-pass-two-buttons{
  display:flex;
  justify-content: space-between;
  width:100%;
  margin:0px 25px 0px 25px;
}
.alert-dialog-pass-two-buttons > Button {
    margin: 10px;
    width:150px !important;
  }

</style>

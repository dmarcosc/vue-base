<template>
  <f-dialog ref="dialog" :class="{ 'dialog-pass no-icon' : !icon , 'dialog-pass' : icon}"
            :title="title"
            :icon="icon"
  >
    <template slot="content">
      <slot />
    </template>
    <template slot="footer">
      <div :class="{'dialog-two-buttons':twoButtons}">
        <Button v-if="twoButtons" size="lg"
                secondary
                icon="angle-left"
                @click="secondary"
        >
          {{ buttonText2 }}
        </Button>
        <Button size="lg" @click="primary">
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

export default Vue.extend({
  name: 'BasicDialog',
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
.dialog-pass.mdc-dialog .mdc-dialog__surface {
  //max-width: 90%;
  padding: 50px;
}

.dialog-pass .mdc-dialog__actions {
  justify-content: center;
}

.dialog-pass .mdc-dialog__title .mdc-dialog__title-inner {
  font-size: 22px;
  color: #062a73;
  line-height: 22px;
  font-weight: 600;
  border-bottom:none;
  text-transform: uppercase;
  padding-left: 0 !important;

  @media  screen and (max-width : 400px) {
    font-size: 18px;
  }
}
.dialog-pass.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions, .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{
  border-color:white !important;
}
.no-icon .mdc-dialog__title .mdc-dialog__title-inner.trail-icon{
  display: none;
}
.dialog-two-buttons{
  display:flex;
  justify-content: space-between;
  width:100%;
  margin:0px 25px 0px 25px;
}
.dialog-two-buttons > Button {
    margin: 10px;
  }

</style>

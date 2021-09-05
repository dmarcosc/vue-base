<template>
  <div ref="stepperRef">
    <v-stepper v-model="value"
               v-bind="$attrs"
               alt-labels
    >
      <slot />
    </v-stepper>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

export default (Vue as VueConstructor<Vue & {
  $refs: {
    stepperRef: HTMLElement;
  };
}>).extend({
  name: 'PassStepper',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  watch: {
    value (newValue) {
      this.repaintDivider(newValue)
    }
  },
  methods: {
    repaintDivider (numberPage: number) {
      const stepperRef: HTMLElement = this.$refs.stepperRef
      const dividers: NodeListOf<HTMLElement> = stepperRef.querySelectorAll('.v-divider')

      dividers.forEach((divider: HTMLElement, index: number) => {
        divider.style.borderColor = index + 1 < numberPage
          ? '#00ccc5'
          : 'rgba(0, 0, 0, 0.12)'
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$size_step: 40px;
$image_check: './../assets/images/check-solid-white.svg';
::v-deep
.v-stepper__step {
  &__step {
    background-color:#00c7ca !important;
    height: $size_step;
    width: $size_step;
  }

  &.v-stepper__step--complete {
    .v-stepper__step__step {
      background-color:#00c7ca !important;
      background-image: url($image_check);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 25px 25px;
      height: $size_step;
      width: $size_step;
    }
  }
}
::v-deep
.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step {
    background: rgba(0, 0, 0, 0.38) !important;
}
::v-deep
.v-stepper__header {
   box-shadow: none;
   background-color:transparent;
  .v-divider {
    margin: 42px -67px 0 !important;
    border-top: 3px solid rgba(0, 0, 0, 0.12);
  }
}

::v-deep
.v-stepper__content {
  padding: 0;
}

::v-deep
.v-stepper:not(.v-stepper--vertical) .v-stepper__label {
  display: initial;
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
}
::v-deep
.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{
 color:#00a1bb;
}
::v-deep
.theme--light.v-stepper .v-stepper__step--active .v-stepper__label {
 color:#00a1bb;
 text-shadow: none;
}
.v-stepper {
  box-shadow: none;
}

.theme--light.v-stepper {
  background-color:transparent;
}
</style>

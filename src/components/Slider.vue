<template>
  <v-slider
    v-model="valueData"
    v-bind="$attrs"
    hide-details
    :max="max"
    :min="min"
    :step="step"
    thumb-color="#00c2d3"
    track-color="#D2DBE5"
    class="my-slider"
    @input="event => $emit('input', event)"
  >
    <template v-slot:prepend>
      <FIcon class="minus-icon" color="#00c2d3"
             :disabled="minusDisabled"
             name="minus"
             size="lg"
             @click="decrement"
      />
    </template>

    <template v-slot:append>
      <FIcon class="plus-icon" color="#00c2d3"
             :disabled="plusDisabled"
             name="plus"
             size="lg"
             @click="increment"
      />
    </template>
  </v-slider>
</template>

<script lang="ts">
import { FIcon } from 'fwkc4-vue'

import Vue from 'vue'
export default Vue.extend({
  name: 'Slider',
  components: {
    FIcon
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      valueData: this.value,
      minusDisabled: false,
      plusDisabled: false
    }
  },
  watch: {
    value () {
      this.valueData = this.value
      if (this.valueData >= this.max) {
        this.plusDisabled = true
      } else {
        this.plusDisabled = false
      }
      if (this.valueData <= this.min) {
        this.minusDisabled = true
      } else {
        this.minusDisabled = false
      }
    }
  },
  methods: {
    increment () {
      const newValue = this.valueData + this.step
      this.$emit('decrement', newValue)
      this.$emit('input', newValue)
    },
    decrement () {
      const newValue = this.valueData - this.step
      this.$emit('increment', newValue)
      this.$emit('input', newValue)
    }
  }
})

</script>

<style lang="scss" scoped>
.my-slider {
    display: flex;
    align-items: center;

    .minus-icon {
        height: 24px;
        // color: #00c2d3 !important;
        border-color: #00cca9 !important;
        border-radius: 50px !important;
        margin: 0px;
      }

      .plus-icon {
        height: 24px;
        //color: #00c2d3 !important;
      }
}
::v-deep
.v-input__append-outer {
        margin-left: 0px !important;

      }
::v-deep
.v-input__prepend-outer {
        margin-right: 0px !important;
}

</style>

<style lang="scss">

.my-slider {
  .v-slider__thumb {
    height: 25px;
    width: 15px;
    border: 1px solid white !important;
    border-radius: 4.5px !important;
    box-shadow: 0px 1px 2px #b0b0b0 !important;
  }

  .v-slider--horizontal .v-slider__track-container {
    height: 10px;
    border: 1px solid #d4d4d4;
    border-radius: 4.5px;
  }
  .primary.v-slider__track-fill {
    background-color: transparent !important;
    border: 0px solid #d4d4d4 !important;
  }
}

.v-slider__track-fill {
  background-color: none !important;
  background: linear-gradient(90deg, #00c2d3 0%, #00cca9 100%) !important;
  border: 1px solid #d4d4d4 !important;
    border-radius: 4.5px !important;
}
</style>

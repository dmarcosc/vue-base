<template>
  <div class="playground">
    <Checkbox>
      Checkbox
    </Checkbox>
    <Button secondary @click="toggleMask">
      Toggle Mask
    </Button>
    <Button secondary @click="displayDialog">
      Toggle Dialog
    </Button>
    <span style="display:flex; align-items:center;">
      Switch
      <SwitchPass v-model="boolean" />
    </span>
    <NumberField
      v-model="$v.number.$model"
      required
      :invalid="$v.number.$invalid"
      :dirty="$v.number.$dirty"
      :validations="$v.number"
      clearable
      label="NumberField"
    />
    <TextField
      v-model="$v.text.$model"
      required
      :invalid="$v.text.$invalid"
      :dirty="$v.text.$dirty"
      :validations="$v.text"
      clearable
      label="TextField"
    />
    <DateField
      v-model="$v.date.$model"
      required
      :invalid="$v.date.$invalid"
      :dirty="$v.date.$dirty"
      :validations="$v.date"
      clearable
      label="DateField"
    />
    <ComboBox
      v-model="$v.color.$model"
      required
      :invalid="$v.color.$invalid"
      :dirty="$v.color.$dirty"
      :validations="$v.color"
      clearable
      label="ComboBox"
      :items="$t('main.colors')"
    />
    <Button secondary>
      Secondary
    </Button>
    <Button primary>
      Primary
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Checkbox from '@/components/CheckBox.vue'
import ComboBox from '@/components/ComboBox.vue'
import Button from '@/components/Button.vue'
import TextField from '@/components/TextField.vue'
import NumberField from '@/components/NumberField.vue'
import SwitchPass from '@/components/SwitchPass.vue'
import DateField from '@/components/DateField/DateField.vue'
import { required } from 'vuelidate/lib/validators'
import PrivacyPolicyDialog from './dialogs/PrivacyPolicyDialog/PrivacyPolicyDialog.vue'

export default Vue.extend({
  name: 'Playground',
  components: {
    ComboBox,
    Checkbox,
    Button,
    TextField,
    NumberField,
    SwitchPass,
    DateField
  },
  data () {
    return {
      number: 0,
      text: '',
      color: '',
      date: new Date(),
      colors: [],
      boolean: true
    }
  },
  validations () {
    return {
      text: {
        required: required
      },
      color: {
        required: required
      },
      number: {
        required: required
      },
      date: {
        required: required
      }
    }
  },
  mounted () {
    this.$store.commit('ui/setSection', 'playground')
  },
  methods: {
    toggleMask () {
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      window.setTimeout(() => { this.$store.dispatch('ui/hideMask') }, 3000)
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
.playground{
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  min-height: calc(100vh - 80px);
  margin-top:80px;
  display:flex;
  padding:3em 3em;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

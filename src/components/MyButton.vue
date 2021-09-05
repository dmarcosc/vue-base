<template>
  <button :class="{'primaria': primary, 'secundaria': secondary}"
          @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    primary: {
      type: Boolean,
      default: true
    },
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss'>
.primaria{
background-color: greenyellow;
  width:150px;
  height:40px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid black;
}
.secundaria{
background-color: lavender;
  width:150px;
  height:40px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid black;
}
</style>

<template>
  <div :class="{'flip-card': !large, 'flip-card large': large}">
    <div class="flip-card-inner">
      <div class="card-front">
        <h2 class="inner-title">
          {{ title }}
        </h2>
        <div class="inner-div">
          {{ frontText }}
        </div>
        <span class="flip-info"><font-awesome-icon :icon="['fas', 'redo']" /> Flip me !</span>
      </div>
      <div class="card-back">
        <img class="structure-img" :src="image">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FlippingCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    frontText: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    large: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.flip-card{
  max-width: 800px;
  width:450px;
  height:500px;
  background-color: transparent;
  perspective: 1000px;
  cursor:pointer;
  text-align: center;
  margin:2em 0em;
  &.large{
    width:650px;
    height:500px;
  }
}
.flip-card-inner{
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  padding:1em;
  margin-bottom:60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
}
.flip-card:active .flip-card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.card-front {
  padding:1em;
  background-color: #fff;
  color: black;
}

.card-back {
  background-color: #062A73;
  color: white;
  transform: rotateY(180deg);
}
.structure-img{
  // height:500px;
  height:100%;
  width:100%;
}
.inner-title{
margin-bottom:.5em;
}
.inner-div{
display: flex;
}
.flip-info{
color:#062A73;
position: absolute;
bottom:0;
right:0;
margin:0 1em 1em 0;
}

@media (max-width: 600px){
  .flip-card{
  width:450px;
  min-height:700px;
  &.large{
    height:950px;
  }
}
}
</style>

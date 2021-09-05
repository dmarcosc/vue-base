<template>
  <div :class="{'practice-card': !large, 'practice-card large': large}" @click="goTo(route)">
    <h2 class="inner-title">
      {{ title }}
    </h2>
    <div class="card-parts">
      <div class="card-left">
        {{ leftText }}
      </div>
      <div class="card-right">
        <img :class="{'inner-img': !large, 'inner-img-large': large}" :src="image">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PracticeCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
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
    },
    route: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTo (name: string) {
      this.$router.push('/' + name)
    }
  }
})
</script>

<style lang="scss" scoped>

.practice-card {
  max-width: 600px;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  padding:5%;
  margin-bottom:60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  background-color: rgb(237, 235, 243);
  cursor: pointer;
  &:hover{transform:scale(1.03)};
  &:active{opacity: 0.5};
  &.large{
    max-width:1000px;
  }
}
.inner-img {
  width: 250px;
  height: 200px;
}

.inner-img-large {
  width: 500px;
     height: 500px;
}
.card-right {
  margin-left: 50px;
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

.card-left {
  margin-right: -20px;
  margin-bottom: 50px;
  display: flex;
}

.structure-img{
  // height:500px;
  height:100%;
  width:85%;
}
.inner-title{
margin-bottom:.5em;
}
.card-parts {
  display: flex;
  margin-left: -20px;
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

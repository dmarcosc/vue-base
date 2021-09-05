<template>
  <div class="tests">
    <div class="cards">
      <PracticeCard :title="$t('tests.title1')" :left-text="$t('tests.enunciado1')"
                    :image="practice1"
                    route="/practice1"
                    large
      />
      <PracticeCard :title="$t('tests.title2')" :left-text="$t('tests.enunciado2')"
                    :image="practice2"
                    route="/practice2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PracticeCard from '@/components/PracticeCard.vue'
import practice1 from '../assets/images/form.png'
import practice2 from '../assets/images/checkbox.png'

export default Vue.extend({
  name: 'Tests',
  components: {
    PracticeCard
  },
  data () {
    return {
      practice1,
      practice2
    }
  },
  mounted () {
    this.$store.commit('ui/setSection', 'tests')
  },
  methods: {
    goTo (name: string) {
      this.$router.push('/' + name)
    }
  }
})
</script>

<style lang="scss" scope>
.tests {
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  font-size: 25px;
  margin-top:80px;
  padding:0em 1em;
  flex-wrap: wrap;
}

.cards {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 70px
}

.card-example{
  max-width: 1000px;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  padding:5%;
  margin-bottom:60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  align-items: center;
  background-color: rgb(237, 235, 243);
  cursor: pointer;
  &:hover{transform:scale(1.03)};
  &:active{opacity: 0.5};
}

.inner-title{
  margin-bottom:1em;
}

h3 {
  text-align: center
}

.inner-div{
display: flex;
}

.advanced-inner-div{
  display: flex;
}

.inner-img{
  height: 400px;
  margin:auto;
  margin-top: 20px;
  display: block
}

.card-parts {
  columns: 200px 2;
  margin-left: -20px;
}

.card-text {
  margin-right: -20px;
  margin-bottom: 50px
}

</style>

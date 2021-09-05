<template>
  <div class="faldon-content">
    <div class="faldon-img-div">
      <img alt="cookie" height="60"
           :src="cookieImg"
      >
    </div>
    <div class="faldon-text">
      {{ $t('cookies.faldonText') }}
      <button class="faldon-readMore">
        {{ $t('cookies.readMore') }}
      </button>
    </div>
    <div class="faldon-button-div">
      <Button primary
              class="faldon-button"
      >
        {{ $t('buttons.accept') }}
      </Button>
    </div>
  </div>
</template>

<script>
import cookieImg from '@/assets/images/cookie.svg'
import Button from '@/components/Button.vue'

export default {
  name: 'Faldon',
  components: {
    Button
  },
  data () {
    return {
      cookieImg
    }
  }
}
</script>

<style lang="scss" scoped>

.faldon-content {
  height: 127px;
  width: 100%;
  bottom: 0;
  position: fixed;
  z-index: 5;
  background:  #575d61;
  display:flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color:#fff;
}
@media screen and (max-width: 1200px){
  .faldon-content {
    height: 160px !important;
  }
}
@media screen and (max-width: 750px){
  .faldon-content {
    height: 300px !important;
    flex-direction: column;
  }
  .faldon-img-div{
    display:none !important;
  }
  .faldon-text{
    margin:30px 20px 0px 20px;
  }
  .faldon-button{
    width:100% !important;
    margin:0px 20px;
  }
}
@media screen and (max-width: 400px){
  .faldon-content {
    font-size: 13px;
  }
}
.faldon-img-div{
 display:flex;
  justify-content: flex-end;
  flex-basis: 15%;
  margin-top:30px;
  margin-right:20px;
}
.faldon-text{
  margin-top:30px;
}
.faldon-readMore {
    font-weight: 700 !important;
    cursor: pointer;
    outline:none;
}
.faldon-button-div{
  display: flex;
  flex-basis: 35%;
  justify-content: center;
  align-items: center;
}
.faldon-button{
  width: 180px;
  height: 45px;
  border-color: #fff !important;
  border-width: 1px !important;
  border-style: solid !important;
  font-weight: 500;
  font-size: 16px !important;
  line-height: 18px !important;
  background-color: #575d61 !important;
}

</style>

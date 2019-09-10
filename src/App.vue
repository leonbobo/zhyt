<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../images/箭头.png" alt="箭头"></div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  }}
</script>
<style lang="scss" scoped>
.swiper-container{
  width: 100%;
  height: 100%;
  .swiper-slide{
    &:first-child{
      position: relative;
      background: url("../images/中秋.jpg") no-repeat center top;
      background-size: 100%;
      img{
        position: absolute;
        width: 70px;
        bottom: 60px;
        animation: arrows infinite 2s;
      }
    }
    background-color:#ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes arrows {
    0%{
      bottom: 70px;
    }
    50%{
      bottom: 40px;
    }
    100%{
      bottom: 70px;
    }
  }
}
</style>
<template>
  <div class="header">
    <div class="header-title">
      电子班牌可视化数据分析
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: vh(142);
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  background-image: url('@/assets/images/header-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .header-title {
    background: linear-gradient(
      0deg,
      rgba(119, 186, 255, 0.45) 0%,
      rgba(233, 248, 255, 0.45) 73.3154296875%,
      rgba(255, 255, 255, 0.45) 100%
    );
    opacity: 0.89;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: vw(100);
  }
}
</style>

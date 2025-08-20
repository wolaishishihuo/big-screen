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
  height: 142px;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  background-image: url('@/assets/images/header-bg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  .header-title {
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(0deg, #77baff 0%, #e9f8ff 73%, #ffffff 100%);
    background-clip: text;
    opacity: 0.89;
    -webkit-text-fill-color: transparent;
  }
}
</style>

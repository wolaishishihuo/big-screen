<template>
  <div class="dashboard">
    <Header />
    <div class="dashboard-content">
      <Left />
      <Center />
      <Right />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Center, Header, Left, Right } from '@/views/components';
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('@/assets/images/dashboard-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  .dashboard-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    > div {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>

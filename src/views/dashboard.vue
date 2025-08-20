<template>
  <div class="dashboard">
    <Header />
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/views/components';
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/dashboard-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

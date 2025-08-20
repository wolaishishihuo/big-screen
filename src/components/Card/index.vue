<template>
  <div class="card">
    <div class="card-title">
      {{ title }}
    </div>
    <div
      v-loading="loading"
      class="card-content"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  loading?: boolean;
}>();
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .card-title {
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 50px;
    font-size: 20px;
    font-weight: bold;
    background-image: url('@/assets/images/card-title-bg.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .card-content {
    font-size: 18px;
    flex: 1;
    position: relative;
  }
}

:deep(.el-loading-mask) {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

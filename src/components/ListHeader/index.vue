<template>
  <div class="list-header">
    <div v-for="item in titleList" :key="item.label" class="list-header-title" :style="{ width: item.width }">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface TitleItem {
  label: string;
  width: string | number;
}

defineProps({
  titleList: {
    type: Array as PropType<TitleItem[]>,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.list-header {
  display: flex;
  align-items: center;
  padding: 3px 0;
  background: linear-gradient(to right, #061427, #081930 50%, #061427 100%);

  .list-header-title {
    overflow: hidden;
    font-size: 16px;
    color: #89bbff;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

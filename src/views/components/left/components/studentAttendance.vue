<template>
  <div class="student-attendance">
    <Card title="学生出勤情况" :loading="loading">
      <ListHeader :title-list="titleList" />
      <VirtualList
        :data-source="dataSource"
        :loading="loading"
        @scroll-end="handleScrollEnd"
      >
        <template #item="{ item }">
          <div class="student-item">
            <div
              v-for="title in titleList"
              :key="title.field"
              class="student-field"
              :class="title.className"
              :style="{
                width: title.width,
                textAlign: title.align || 'center',
              }"
            >
              <span>{{ item[title.field] }}</span>
              <span v-if="title.field === 'attendanceRate'"> %</span>
            </div>
          </div>
        </template>
      </VirtualList>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useVirtualList } from '@/composables/useVirtualList';
import { fetchStudentData } from '@/mock';

export interface StudentData {
  project_id: number;
  index: number;
  name: string;
  attendanceRate: number;
}

interface TitleConfig {
  label: string;
  width: string;
  field: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  formatter?: (value: any, item: StudentData, index: number) => string;
}

// 表头配置
const titleList: TitleConfig[] = [
  {
    label: '序号',
    width: '33%',
    field: 'index',
    align: 'center'
  },
  {
    label: '姓名',
    width: '33%',
    field: 'name',
    align: 'center'
  },
  {
    label: '出勤率',
    width: '33%',
    field: 'attendanceRate',
    align: 'center',
    className: 'student-rate'
  }
];

// 使用 useVirtualList hooks 管理数据
const { dataSource, loading, handleScrollEnd } = useVirtualList<StudentData>(
  fetchStudentData,
  {
    pageSize: 20,
    enablePagination: true,
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.student-attendance {
  height: 100%;
  padding-bottom: 10px;
}

.student-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(137, 187, 255, 0.1);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(137, 187, 255, 0.05);
  }

  .student-field {
    overflow: hidden;
    color: #ffffff;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 40px;
    line-height: 40px;
    font-weight: 400;
  }
}
</style>

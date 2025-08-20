<template>
  <div class="left w-27% flex-col gap-20 pt-70">
    <StudentAttendance />
    <TeacherAttendanceRate />
    <CourseAttendanceRate />
  </div>
</template>

<script setup lang="ts">
import CourseAttendanceRate from './components/courseAttendanceRate.vue';
import StudentAttendance from './components/studentAttendance.vue';
import TeacherAttendanceRate from './components/teacherAttendanceRate.vue';
</script>

<style lang="scss" scoped>
.left {
  > div {
    flex: 1;
  }
}
</style>

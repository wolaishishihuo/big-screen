import type { StudentData } from '@/views/components/left/components/studentAttendance.vue';

export const fetchStudentData = async (params: { page: number; pageSize: number }) => {
  const { page, pageSize } = params;
  const totalStudents = 100; // 总共100个学生

  console.log(`正在加载第${page + 1}页数据...`);

  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800));

  const startIndex = page * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalStudents);
  const data: StudentData[] = [];

  for (let i = startIndex; i < endIndex; i++) {
    data.push({
      project_id: i,
      index: i,
      name: `张三${i.toString().padStart(2, '0')}`,
      attendanceRate: Math.floor(Math.random() * 20) + 80
    });
  }

  console.log(`第${page + 1}页加载完成，本次加载${data.length}条数据`);

  // 返回符合 hooks 期望的格式
  return {
    data,
    total: totalStudents
  };
};

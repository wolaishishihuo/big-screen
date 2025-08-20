import { computed, ref } from 'vue';

/**
 * 虚拟列表数据管理 Hook
 * 简洁设计，专注核心功能：数据获取、分页、加载状态
 */
export function useVirtualList<T = any>(
  apiFunction: (params: any) => Promise<any>,
  options: {
    pageSize?: number;
    immediate?: boolean;
    enablePagination?: boolean;
    params?: Record<string, any>; // 用户自定义参数
  } = {}
) {
  const { pageSize = 20, immediate = true, enablePagination = true, params: userParams = {} } = options;

  // 响应式状态
  const dataSource = ref<T[]>([]);
  const loading = ref(false);
  const currentPage = ref(0);
  const hasMore = ref(true);

  /**
   * 获取数据
   */
  const fetchData = async (page: number = 0, isRefresh = false) => {
    if (loading.value) return;

    loading.value = true;

    try {
      // 构建请求参数 - 合并用户参数和分页参数
      const params = {
        ...userParams,
        ...(enablePagination ? { page, pageSize } : {})
      };

      const response = await apiFunction(params);

      // 用户需要自行处理 API 响应格式，返回 { data: T[], total?: number }
      const { data = [], total } = response;

      if (isRefresh) {
        dataSource.value = data;
        currentPage.value = page;
      } else {
        dataSource.value.push(...data);
        currentPage.value = page;
      }

      // 判断是否还有更多数据
      if (enablePagination) {
        if (total !== undefined) {
          // 有总数信息：根据总数判断
          hasMore.value = dataSource.value.length < total;
        } else {
          // 无总数信息：根据返回数据量判断（小于pageSize说明没有更多了）
          hasMore.value = data.length === pageSize;
        }
      } else {
        // 非分页模式：一次性获取所有数据，没有更多
        hasMore.value = false;
      }
    } catch (error) {
      console.error('数据加载失败:', error);
    } finally {
      loading.value = false;
    }
  };

  /**
   * 加载更多
   */
  const loadMore = async () => {
    // 非分页模式不支持加载更多
    if (!enablePagination || !hasMore.value || loading.value) return;
    const nextPage = currentPage.value + 1;
    await fetchData(nextPage, false);
  };

  /**
   * 刷新数据
   */
  const refresh = async () => {
    currentPage.value = 0;
    // 只有分页模式才重置 hasMore 为 true
    if (enablePagination) {
      hasMore.value = true;
    }
    await fetchData(0, true);
  };

  /**
   * 更新查询参数并刷新数据
   */
  const updateParams = async (newParams: Record<string, any>) => {
    Object.assign(userParams, newParams);
    await refresh();
  };

  /**
   * 滚动到底部处理
   */
  const handleScrollEnd = () => {
    // 只有分页模式下才处理滚动加载更多
    if (enablePagination && hasMore.value && !loading.value) {
      loadMore();
    }
  };

  // 初始化
  if (immediate) {
    fetchData(0, true);
  }

  return {
    dataSource,
    loading,
    hasMore,
    currentPage: computed(() => currentPage.value),
    loadMore,
    refresh,
    updateParams,
    handleScrollEnd
  };
}

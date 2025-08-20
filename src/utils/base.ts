/**
 * 根据rem计算出的px（返回带px单位的字符串）
 * @param remValue - rem 值
 * @returns 带px单位的字符串
 */
export function remToPx(remValue: number): string {
  const rootFontSize = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `${remValue * rootFontSize}px`;
}
/**
 * 根据当前页面的 px 值转换为 rem 值
 * @param pxValue - px 值
 * @returns 对应的 rem 值
 */
export function pxToRem(pxValue: number): number {
  // 获取当前根元素的 fontSize（即 1rem 对应的 px 值）
  const rootFontSize = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  // 计算对应的 rem 值
  return pxValue / rootFontSize;
}

/**
 * @description 延迟一帧触发
 * @param callback 回调
 * @returns raf的id
 */
export function delayRef(callback: () => void) {
  let timer;
  function frame() {
    timer = requestAnimationFrame(callback);
  }
  timer = requestAnimationFrame(frame);
  return timer;
}

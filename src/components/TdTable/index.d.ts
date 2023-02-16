/**
 * 数据表格列的定义
 */
export interface Column {
  prop: string; // 属性名
  label: string; // 显示名
  width?: number | 'auto'; // 列的宽度
  format?: (row: Record<string, any>, key: string, index: number) => any; // 格式化
}

/**
 * 单行数据项
 */
export interface Row {
  [x: string]: any;
}

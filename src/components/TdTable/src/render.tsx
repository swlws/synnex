type Props = {
  row: Record<string, any>; // 整行数据
  prop: string; // 对应的prop
  index: number; // 索引
  format?: (row: Record<string, any>, prop: string, index: number) => any; // 返回值，可以是组件，也可以是非组件
};

export default function (props: Props) {
  if (props.format) {
    return props.format.call(props.row, props.row, props.prop, props.index);
  }

  return props.row[props.prop];
}

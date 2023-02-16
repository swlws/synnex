import { h } from 'vue';
type Props = {
  text?: string;
  filter?: string;
};

/**
 * 通过切割字符串，实现高亮
 *
 * @param props
 * @returns
 */
export default function (props: Props) {
  if (!props.text) return '';
  if (!props.filter) return props.text;

  const style = {
    color: 'orange',
    backgroundColor: '#e8e8e8',
  };

  const arr = props.text.split(props.filter);
  if (props.text === 'Mark Zhu') {
    console.log(arr);
  }

  const rt = [];
  if (props.text.startsWith(props.filter)) {
    rt.push(h('b', { style }, props.filter));
  }

  for (let el of arr) {
    if (el) {
      rt.push(el);
      rt.push(h('b', { style }, props.filter));
    }
  }

  if (!props.text.endsWith(props.filter)) {
    rt.pop();
  }

  return rt;
}

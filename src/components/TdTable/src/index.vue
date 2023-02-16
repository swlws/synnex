<template>
  <article ref="boxRef">
    <header :style="rowStyle">
      <div v-for="col in columns" :key="col.prop">{{ col.label }}</div>
    </header>

    <main>
      <div v-for="(row, ri) in data" :key="ri" :style="rowStyle">
        <div v-for="item in columns" :key="item.prop">
          <!-- 通过TSX解析具体的组件 -->
          <DataRender :row="row" :prop="item.prop" :index="ri" :format="item.format" />
        </div>
      </div>

      <div> Total: {{ data.length }} </div>
    </main>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Column, Row } from '../index.d';
import DataRender from './render';

const props = defineProps<{ columns: Column[]; data: Row[] }>();
defineOptions({ name: 'TdTable' });

/**
 * 组件的ref，计算宽度时使用
 */
const boxRef = ref('');

/**
 * grid的属性设置
 */
const rowStyle = computed(() => {
  const obj = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '',
  };

  const el = boxRef.value as any;
  const boxWidth = el.clientWidth;
  if (boxWidth) {
    const list = props.columns || [];
    const arr = list.map((item) => item.width);

    const rt = calcWidth(arr, boxWidth);

    obj.gridTemplateColumns = rt.join(' ');
  }

  return obj;
});

/**
 * 计算grid网格中，每一列的自适应宽度
 *
 * @param o
 * @param total
 */
function calcWidth(o: (number | 'auto' | undefined)[], total: number) {
  let a = 0,
    t = 0;
  for (let w of o) {
    if (typeof w == 'number') {
      t += w;
    } else a++;
  }
  const s = Math.floor((total - t) / a);

  let rt = [];
  for (let w of o) {
    if (typeof w == 'number') {
      rt.push(w + 'px');
    } else {
      rt.push(s + 'px');
    }
  }

  return rt;
}
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  > header {
    padding: 10px 0;
    border-bottom: 1px solid #e8e8e8;
  }

  > main {
    flex: 1;
    overflow: auto;

    > div {
      padding: 10px 0;
      border-bottom: 1px solid #e8e8e8;

      &:nth-child(even) {
        background-color: #f7f8f9;
      }
    }
  }
}
</style>

<template>
  <div class="td-button" :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'TdButton' });
const props = defineProps<{ type?: 'primary' | 'success'; text?: boolean }>();

const style = computed(() => {
  if (props.text) {
    return {
      color: '#009afe',
      backgroundColor: 'transparent',
    };
  }

  const color = props.type === 'success' ? '#43b539' : '#3661f4';

  return {
    color: '#fff',
    backgroundColor: color,
  };
});
</script>

<style lang="scss" scoped>
.td-button {
  color: #fff;
  font-size: 14px;
  display: inline-block;
  padding: 3px 8px;
  margin: 0 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>

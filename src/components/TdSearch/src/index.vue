<template>
  <div class="td-search">
    <i class="iconfont icon-search"></i>
    <input type="text" v-model="v" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'TdSearch' });

const props = defineProps<{ value?: string; placeholder?: string }>();
const emits = defineEmits(['update:value']);

const v = computed({
  get() {
    return props.value || '';
  },
  set(v) {
    emits('update:value', v);
  },
});
</script>

<style lang="scss" scoped>
.td-search {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #e8e8e8;

  > i {
    font-size: 20px;
    color: #666;
  }

  &:hover {
    border-color: #009afe;
  }
}

input {
  height: 32px;
  width: 100%;
  padding: 0 10px;

  border: none;
  outline: none;
}
</style>

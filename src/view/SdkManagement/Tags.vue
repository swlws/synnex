<template>
  <div class="tags">
    <div v-for="item in list" :key="item"> {{ item }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{ tags?: string }>();

const list = computed(() => {
  if (!props.tags) return [];

  return props.tags.split(',');
});
</script>

<style lang="scss" scoped>
.tags {
  display: flex;

  > div {
    margin: 0 3px;
    font-size: 12px;
    background-color: #e8e8e8;
    color: #333;
    padding: 0 2px;
  }
}
</style>

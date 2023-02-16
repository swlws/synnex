<template>
  <td-dialog v-model:visible="show" :title="'Edit SDK'"> Edit </td-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{ visible: boolean }>();
const emits = defineEmits(['update:visible']);

const show = computed({
  get() {
    return props.visible;
  },
  set(v) {
    emits('update:visible', v);
  },
});
</script>

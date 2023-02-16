<template>
  <td-dialog v-model:visible="show" :title="'Create SDk'">
    <td-input label="Client Name" v-model:value="data.client_name" required />
    <td-input label="Board" v-model:value="data.board_name" required />
    <td-input label="Tags" v-model:value="data.tags" />
    <td-input label="Requestor" v-model:value="data.requester" required />

    <template v-slot:footer>
      <td-button text @click="close">Cancel</td-button>
      <td-button @click="submit">Submit</td-button>
    </template>
  </td-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Sdk } from '@/view/@api/sdk';

const props = defineProps<{ visible: boolean }>();
const emits = defineEmits(['update:visible', 'success']);

const show = computed({
  get() {
    return props.visible;
  },
  set(v) {
    emits('update:visible', v);
  },
});

const data = ref<Partial<Sdk>>({});

/**
 * 关闭窗口
 */
function close() {
  emits('update:visible', false);
}

/**
 * 提交数据
 */
function submit() {
  const keys = ['client_name', 'board_name', 'requester'];
  const obj = data.value as any;
  for (let key of keys) {
    if (!obj[key]) {
      alert('请完善信息');
      return;
    }
  }

  emits('success', data.value);
  close();
}
</script>

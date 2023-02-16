<template>
  <section class="td-input">
    <header>
      <div v-if="required" class="required">*</div>
      <div> {{ label }} </div>
      <div v-if="icon"></div>
      <div>:</div>
    </header>

    <main>
      <input type="text" v-model="v" />
    </main>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'TdInput' });

const props = defineProps<{ label: string; icon?: string; value?: string; required?: boolean }>();
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
.td-input {
  width: 100%;
  > header {
    display: flex;

    > div {
      margin: 0 3px;
    }
    > .required {
      color: red;
    }
  }

  > main {
    margin: 5px 0;
    input {
      box-sizing: border-box;
      height: 32px;
      width: 100%;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #e8e8e8;
      outline: none;

      &:focus,
      &:checked {
        border-color: #009afe;
      }
    }
  }
}
</style>

<template>
  <teleport to="body">
    <article v-if="visible">
      <section>
        <header>
          <span>{{ title }}</span>
          <span @click="close" class="close">x</span>
        </header>

        <main>
          <slot />
        </main>

        <footer v-if="hasFooter">
          <slot name="footer" />
        </footer>
      </section>
    </article>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue';

defineOptions({ name: 'TdDialog' });
defineProps<{ visible: boolean; title?: string }>();

const emits = defineEmits(['update:visible', 'close']);

function close() {
  emits('update:visible', false);
}

// 判断具名插槽footer是否存在
const hasFooter = computed(() => {
  const ins = getCurrentInstance();

  return !!ins?.slots?.footer;
});
</script>

<style lang="scss" scoped>
article {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.1);

  > section {
    margin: 100px auto 0;
    min-height: 500px;
    width: 800px;
    background-color: #fff;

    border-radius: 5px;

    display: flex;
    flex-direction: column;

    > header {
      height: auto;
      font-size: 1.2em;
      padding: 10px;
      border-bottom: 1px solid #e8e8e8;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > main {
      padding: 20px;
      flex: 1;
      overflow: auto;
    }

    > footer {
      text-align: right;
      padding: 20px;
    }
  }
}

.close {
  cursor: pointer;
  color: #333;
  padding: 0 5px;
  border-radius: 50%;

  &:hover {
    background-color: #e8e8e8;
  }
}
</style>

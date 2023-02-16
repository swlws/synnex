<template>
  <div>
    Dashboards
    <Butotn :name="'sss'" />

    {{ Name }}
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import Butotn from './Butotn';

function Name() {
  return h('div', 'dividididi');
}
</script>

<style lang="scss" scoped></style>

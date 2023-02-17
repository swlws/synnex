<template>
  <article>
    <!-- 头部检索、新建 -->
    <header>
      <h5>SDK Management</h5>

      <aside>
        <td-search
          v-model:value="searchContent"
          placeholder="Search client name, border name, tags, requestor"
        />

        <td-button type="success" @click="addVisible = true">
          <i class="iconfont icon-new"></i>

          Create SDK
        </td-button>
      </aside>
    </header>

    <!-- 数据表格 -->
    <td-table :columns="columns" :data="list" />

    <!-- 添加SDK -->
    <AddSdk v-model:visible="addVisible" @success="addSuccess" />

    <!-- 编辑SDK -->
    <EditSdk v-model:visible="EditVisible" />
  </article>
</template>

<script setup lang="ts">
import { reactive, ref, h } from 'vue';
import { Column } from '@/components/TdTable';
import { Sdk, getSdkList } from '@/view/@api/sdk';
import TdButton from '@/components/TdButton';

import AddSdk from './AddSdk.vue';
import EditSdk from './EditSdk.vue';
import Tags from './Tags.vue';
import HightLight from './HightLight';

const addVisible = ref(false);
const EditVisible = ref(false);
const searchContent = ref('');

/**
 * 数据表格列定义
 */
const columns = reactive<Column[]>([
  {
    prop: 'client_name',
    label: 'Client Name',
    format: (row) => {
      return h(HightLight, { text: row.client_name, filter: searchContent.value });
    },
  },
  {
    prop: 'board_name',
    label: 'Board Name',
    format: (row) => {
      return h(HightLight, { text: row.board_name, filter: searchContent.value });
    },
  },
  {
    prop: 'tags',
    label: 'Tags',
    format: (row) => {
      return h(Tags, {
        tags: row.tags,
        filter: searchContent.value,
      });
    },
  },
  {
    prop: 'requester',
    label: 'Requestor',
    format: (row) => {
      return h(HightLight, { text: row.requester, filter: searchContent.value });
    },
  },
  {
    prop: 'sdk_script',
    label: 'SDK script',
    format: (row) => {
      return h(
        'div',
        {
          style: {
            color: '#009afe',
            display: 'flex',
            alignItems: 'center',
          },
        },
        [h('i', { class: 'iconfont icon-code', style: { fontSize: '30px' } }), h('span', 'SDk')],
      );
    },
  },
  {
    prop: 'actions',
    label: 'Actions',
    format: (row, key, index) => {
      const style = {
        fontSize: '25px ',
      };
      return [
        h('i', {
          class: 'iconfont icon-edit',
          style,
          onclick: () => {
            EditVisible.value = true;
          },
        }),
        h('i', {
          class: 'iconfont icon-delete',
          style,
          onclick: () => {
            alert(`删除第${index + 1}行数据`);
            list.value.splice(index, 1);
          },
        }),
      ];
    },
  },
]);

/**
 * 请求数据
 */
const list = ref<Sdk[]>([]);
getSdkList().then((data) => {
  list.value = data;
});

function addSuccess(data: Sdk) {
  list.value.push(data);
}
</script>

<style lang="scss" scoped>
article {
  overflow: auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;

  > header {
    height: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > aside {
      display: flex;
    }
  }

  > main {
    flex: 1;
    overflow: auto;
  }
}
</style>

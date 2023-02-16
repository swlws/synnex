<template>
  <article>
    <aside>
      <div
        v-for="item in list"
        :key="item.name"
        :class="{ checked: item.name === tab }"
        @click="changeTab(item.name)"
      >
        <i :class="item.icon"></i>
        {{ item.name }}
      </div>
    </aside>

    <main>
      <keep-alive>
        <component :is="component" />
      </keep-alive>
    </main>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import UserProfile from './view/UserProfile/index.vue';
import SdkManagement from './view/SdkManagement/index.vue';
import Dashboards from './view/Dashboards/index.vue';
import TermsConditions from './view/TermsConditions/index.vue';

// 选中的Tab
const tab = ref('SDK Management');

const list = [
  {
    name: 'User Profile',
    component: UserProfile,
    icon: 'iconfont icon-api',
  },
  {
    name: 'SDK Management',
    component: SdkManagement,
    icon: 'iconfont icon-api',
  },
  {
    name: 'Dashboards',
    component: Dashboards,
    icon: 'iconfont icon-api',
  },
  {
    name: 'Terms & Conditions',
    component: TermsConditions,
    icon: 'iconfont icon-api',
  },
];

// 当前显示的组件
const component = computed(() => {
  const name = tab.value;

  const index = list.findIndex((item) => item.name == name);
  if (index !== -1) return list[index].component;

  return null;
});

function changeTab(name: string) {
  tab.value = name;
}
</script>

<style scoped lang="scss">
article {
  height: 100%;

  display: flex;

  > aside {
    width: 250px;
    border-right: 1px solid #e8e8e8;
    font-weight: bolder;

    > div {
      padding: 8px;
      border-bottom: 1px solid #e8e8e8;

      transition: cursor 0.3s;
      &:hover {
        cursor: pointer;
        color: #009afe;
        border-color: #009afe;
      }

      &.checked {
        color: #009afe;
        border-color: #009afe;
        position: relative;

        &::before {
          content: ' ';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 5px;
          height: 100%;
          background-color: #009afe;
        }
      }
    }
  }

  > main {
    flex: 1;
  }
}
</style>

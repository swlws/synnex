import { App } from 'vue';
import component from './src/index.vue';

export * from './index.d';

component.install = (app: App) => {
  app.component(component.name, component);
};

export default component;

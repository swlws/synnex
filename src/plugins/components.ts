import { App } from 'vue';
import TdTable from '@/components/TdTable';
import TdDialog from '@/components/TdDialog';
import TdButton from '@/components/TdButton';
import TdInput from '@/components/TdInput';
import TdSearch from '@/components/TdSearch';

export default function install(app: App) {
  app.use(TdTable.install);
  app.use(TdDialog.install);
  app.use(TdButton.install);
  app.use(TdInput.install);
  app.use(TdSearch.install);
}

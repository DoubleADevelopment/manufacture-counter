//components
import { ComponentsList } from '../../../../components';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { ComponentsRouting } from '../../../../variables';
import { chemistryComponentsListData } from '../../data/chemistry-components-list-data';
//styles
import style from './packages-overview-page.module.scss';

const PackagesOverviewPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={ComponentsRouting.CHEMISTRY.title}>
      <main className={style['packages-overview-page']}>
        <ComponentsList dataList={chemistryComponentsListData} />
      </main>
    </PageWithMenuLayout>
  );
};

export default PackagesOverviewPage;

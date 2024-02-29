//components
import { ComponentsList } from '../../../../components';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { AppRouting, ComponentsRouting } from '../../../../variables';
import { chemistryComponentsListData } from '../../data/chemistry-components-list-data';
//styles
import style from './chemistry-root-page.module.scss';

const ChemistryRootPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout
      headerTitle={ComponentsRouting.CHEMISTRY.title}
      backLink={AppRouting.ROOT.path}
    >
      <main className={style['chemistry-root-page']}>
        <ComponentsList dataList={chemistryComponentsListData} />
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryRootPage;

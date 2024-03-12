//components
import { ComponentsList } from '../../../../components';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//data
import { chemistryComponentsListData } from '../../data/chemistry-components-list-data';
//variables
import { AppRouting } from '../../../../variables';
import { CHEMISTRY_TEXT } from '../../variables';
//styles
import style from './chemistry-root-page.module.scss';

const ChemistryRootPage = (): JSX.Element => {
  return (
    <PageWithMenuLayout headerTitle={CHEMISTRY_TEXT.CHEMISTRY} backLink={AppRouting.ROOT.path}>
      <main className={style['chemistry-root-page']}>
        <ComponentsList dataList={chemistryComponentsListData} />
      </main>
    </PageWithMenuLayout>
  );
};

export default ChemistryRootPage;

//components

//services

//store

//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
// import { GUMS_TEXT } from '../../variables';
import { AppRouting } from '../../../../variables';
//styles
import style from './supplies-root-page.module.scss';

const SuppliesRootPage = () => {
  return (
    <PageWithMenuLayout headerTitle={'supplies title'} backLink={AppRouting.ROOT.path}>
      <main className={style['gums-root-page']}></main>
    </PageWithMenuLayout>
  );
};

export default SuppliesRootPage;

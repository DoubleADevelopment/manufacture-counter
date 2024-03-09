//layouts
// import { useAppSelector } from '../../../../hooks/hooks';
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { ComponentsRouting } from '../../../../variables';
// import pigmentsAdapterService from '../../services/pigments-adapter.service';
//styles
import style from './pigments-root-page.module.scss';

const PigmentsRootPage = () => {
  // const gumsState = useAppSelector(SelectorGetGums());
  // const adaptedData = pigmentsAdapterService.adaptItemsDataToDisplayList(gumsState);

  return (
    <PageWithMenuLayout headerTitle={ComponentsRouting.PIGMENTS.title}>
      <main className={style['pigments-root-page']}></main>
    </PageWithMenuLayout>
  );
};

export default PigmentsRootPage;

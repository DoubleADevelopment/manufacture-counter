//store
import { useAppSelector } from '../../hooks/hooks';
//services
import { adapterService } from '../../services';
//components
import { ItemsList, PageNotification } from '../../components';
//layouts
import { PageWithMenuLayout } from '../../layouts';
//variables
import { AppRouting, ErrorsText, NotificationType } from '../../variables';
//types
import type { ISelectorGetData } from '../../types';
//styles
import style from './component-root-page.module.scss';

interface IComponentRootPageProps {
  headerTitle: string;
  SelectorGetComponentState: ISelectorGetData;
}

const ComponentRootPage = ({
  SelectorGetComponentState,
  headerTitle,
}: IComponentRootPageProps): JSX.Element => {
  const componentState = useAppSelector(SelectorGetComponentState());
  const adaptedData = adapterService.adaptItemsDataToDisplayList(componentState);

  return (
    <PageWithMenuLayout headerTitle={headerTitle} backLink={AppRouting.ROOT.path}>
      <main className={style['component-root-page']}>
        {adaptedData ? (
          <ItemsList data={adaptedData} />
        ) : (
          <PageNotification
            type={NotificationType.ERROR}
            headingText={ErrorsText.SOMETHING_WENT_WRONG}
            paragraphText={ErrorsText.ITEMS_LIST_NOT_FOUND}
          />
        )}
      </main>
    </PageWithMenuLayout>
  );
};

export default ComponentRootPage;

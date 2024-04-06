//components
import ComponentsListItem from './components-list-item/components-list-item';
//store
import { store } from '../../store/store';
//styles
import style from './components-list.module.scss';

const ComponentsList = (): JSX.Element => {
  const reduxStateArray = Object.values(store.getState());
  return (
    <ul className={style['components-list']}>
      {reduxStateArray.map((item) => {
        return <ComponentsListItem item={item} key={item.dataPackageUNID} />;
      })}
    </ul>
  );
};

export default ComponentsList;

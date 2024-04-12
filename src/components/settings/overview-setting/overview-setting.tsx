import { useEffect, useState } from 'react';
//components
import { Switcher } from '../..';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { SelectorGetOverviewPanelStatus } from '../../../store/app-selectors';
import { changeOverviewPanelStatusAction } from '../../../store/app-actions';
//types
import type { overviewPanelStatusType } from '../../../types';
//styles
import style from './overview-setting.module.scss';

const OverviewSetting = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [overviewPanelStatus, setOverviewPanelStatus] = useState<overviewPanelStatusType>(
    useAppSelector(SelectorGetOverviewPanelStatus()),
  );

  useEffect(() => {
    dispatch(changeOverviewPanelStatusAction({ newStatus: overviewPanelStatus }));
  }, [overviewPanelStatus]);

  const onOverviewStatusSwitcherHandler = (value: boolean) => {
    if (value === true) {
      setOverviewPanelStatus('open');
    } else {
      setOverviewPanelStatus('close');
    }
  };

  return (
    <section className={style['app-setting']}>
      <h2 className="content-primary-a heading-x-small">Ustawienia przeglądu</h2>

      <div className={style['app-setting__controll-field']}>
        <p className="label-medium content-primary-a">
          lista komponentów / {overviewPanelStatus === 'open' ? 'otwarta' : 'zamknięta'}
        </p>
        <Switcher
          onChangeListener={onOverviewStatusSwitcherHandler}
          checked={overviewPanelStatus === 'open' ? true : false}
        />
      </div>
    </section>
  );
};

export default OverviewSetting;

/* eslint-disable @typescript-eslint/no-unused-vars */
//styles
import { ChangeEvent, useState } from 'react';
import style from './app-setting.module.scss';
import { overviewPanelStatusType } from '../../../types';
import { useAppSelector } from '../../../hooks/hooks';
import { SelectorGetOverviewPanelStatus } from '../../../store/app-selectors';
import { Switcher } from '../../';

const AppSetting = (): JSX.Element => {
  const [overviewPanelStatus, setOverviewPanelStatus] = useState<overviewPanelStatusType>(
    useAppSelector(SelectorGetOverviewPanelStatus()),
  );

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
        <Switcher onChangeListener={onOverviewStatusSwitcherHandler} />
      </div>
    </section>
  );
};

export default AppSetting;

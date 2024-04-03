import { ChangeEvent, useEffect, useState } from 'react';
//types
import { IAdditionalNavItem } from '../../types';
//style
import style from './additional-nav.module.scss';

interface IAdditionalNavProps {
  items: IAdditionalNavItem[];
  changeHandler: (value: string) => void;
  defaultItem?: string;
}

const AdditionalNav = ({ items, changeHandler, defaultItem }: IAdditionalNavProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(
    defaultItem ? defaultItem : items[0].value,
  );
  const leftDistanceForIndicator =
    items.findIndex((item) => item.value === selectedItem) * (100 / items.length) + '%';

  const formHandler = (evt: ChangeEvent<HTMLFormElement>) => {
    setSelectedItem(evt.target.value);
  };

  useEffect(() => {
    changeHandler(selectedItem);
  }, [selectedItem]);

  return (
    <form className={`${style['additional-nav']} unselectable`} onChange={formHandler}>
      {items.map((item) => {
        return (
          <label className={`${style['additional-nav__label']} unselectable`} key={item.value}>
            <span className={`label-large content-primary-a`}>{item.title}</span>
            <input className={`hidden-input`} type="radio" name="additional" value={item.value} />
          </label>
        );
      })}
      <div
        className={style.indicator}
        style={{
          width: `${100 / items.length}%`,
          left: leftDistanceForIndicator,
        }}
      ></div>
    </form>
  );
};

export default AdditionalNav;

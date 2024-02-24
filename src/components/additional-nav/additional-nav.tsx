import { ChangeEvent, useState } from 'react';
//style
import style from './additional-nav.module.scss';

interface IAdditionalNavProps {
  items: string[];
}

const AdditionalNav = ({ items }: IAdditionalNavProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);
  const leftDistanceForIndicator = items.indexOf(selectedItem) * (100 / items.length) + '%';

  const handler = (evt: ChangeEvent<HTMLFormElement>) => {
    setSelectedItem(evt.target.value);
  };

  return (
    <form className={`${style['additional-nav']} unselectable`} onChange={handler}>
      {items.map((item) => {
        return (
          <label className={`${style['additional-nav__label']}`} key={item}>
            <span className={`label-large content-primary-a`}>{item}</span>
            <input
              className={style['additional-nav__input']}
              type="radio"
              name="additional"
              value={item}
            />
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

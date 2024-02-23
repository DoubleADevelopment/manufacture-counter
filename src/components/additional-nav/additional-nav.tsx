//style
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './additional-nav.module.scss';

interface IAdditionalNavProps {
  items: string[];
}

const AdditionalNav = ({ items }: IAdditionalNavProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const selectedLabelRef = useRef<HTMLLabelElement | null>(null);

  const handler = (evt: ChangeEvent<HTMLFormElement>) => {
    // console.log(evt.target);
    setSelectedItem(evt.target.value);
  };

  useEffect(() => {
    if (selectedLabelRef.current) {
      const labelRect = selectedLabelRef.current.getBoundingClientRect();
      console.log(labelRect);
    }
  }, [selectedItem]);

  return (
    <form className={style['additional-nav']} onChange={handler}>
      {items.map((item) => {
        return (
          <label
            className={`${style['additional-nav__label']}`}
            key={item}
            ref={selectedItem === item ? selectedLabelRef : null}
          >
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
    </form>
  );
};

export default AdditionalNav;

//styles
import style from './component-not-found.module.scss';

interface IComponentNotFoundProps {
  text: string;
}

const ComponentNotFound = ({ text }: IComponentNotFoundProps): JSX.Element => {
  return (
    <div className={style['component-not-found']}>
      <h4>{text}</h4>
    </div>
  );
};

export default ComponentNotFound;

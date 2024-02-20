//style
import style from '../item-card-short.module.scss';

const ItemCardShortSkeleton = (): JSX.Element => {
  return <article className={`${style['item-card-short-skeleton']} skeleton-card-short`}></article>;
};

export default ItemCardShortSkeleton;

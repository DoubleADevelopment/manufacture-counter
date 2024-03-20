//types
import { IIconProps } from '../../types';

const ArrowUpIcon = ({ color, size }: IIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      viewBox="0 -960 960 960"
    >
      <path
        fill={color ? color : 'currentColor'}
        d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"
      />
    </svg>
  );
};

export default ArrowUpIcon;

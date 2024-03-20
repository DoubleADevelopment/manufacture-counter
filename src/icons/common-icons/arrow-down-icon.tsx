//types
import { IIconProps } from '../../types';

const ArrowDownIcon = ({ color, size }: IIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      viewBox="0 -960 960 960"
    >
      <path
        fill={color ? color : 'currentColor'}
        d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
      />
    </svg>
  );
};

export default ArrowDownIcon;

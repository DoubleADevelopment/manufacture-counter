//types
import { IIconProps } from '../../types';

const ArrowBackIcon = ({ color, size }: IIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      focusable="false"
      aria-hidden="true"
    >
      <path
        fill={color ? color : 'currentColor'}
        d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"
      />
    </svg>
  );
};

export default ArrowBackIcon;

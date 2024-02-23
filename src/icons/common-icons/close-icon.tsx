//types
import { IIconProps } from '../../types';

const CloseIcon = ({ color, size }: IIconProps): JSX.Element => {
  return (
    <svg
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0669 3.40023L12.6003 1.93359L8.00024 6.60026L3.40023 1.93359L1.93359 3.40023L6.60026 8.00024L1.93359 12.6003L3.40023 14.0669L8.00024 9.40023L12.6003 14.0669L14.0669 12.6003L9.40023 8.00024L14.0669 3.40023Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
};

export default CloseIcon;

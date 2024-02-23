//types
import { IIconProps } from '../../types';

const NavIconHome = ({ color, size }: IIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      viewBox="0 -960 960 960"
    >
      <path
        fill={color ? color : 'currentColor'}
        d="M228-186.666h123.667v-255.667H609v255.667h123v-378.668L480-754.001 228-565.556v378.89Zm-84 83.999v-505l336-250.999 336 250.999v505H525v-255.667h-89.334v255.667H144Zm336-368Z"
      />
    </svg>
  );
};

export default NavIconHome;

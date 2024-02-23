//types
import { IIconProps } from '../../types';

const PositiveIcon = ({ size }: Omit<IIconProps, 'color'>): JSX.Element => {
  return (
    <svg
      height={size ? size.height : 40}
      width={size ? size.width : 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0002 38.8891C30.4323 38.8891 38.8891 30.4323 38.8891 20.0002C38.8891 9.56817 30.4323 1.11133 20.0002 1.11133C9.56817 1.11133 1.11133 9.56817 1.11133 20.0002C1.11133 30.4323 9.56817 38.8891 20.0002 38.8891Z"
        fill="#0E8345"
      />
      <path
        d="M20.0004 36.3152C29.0108 36.3152 36.3152 29.0108 36.3152 20.0004C36.3152 10.9899 29.0108 3.68555 20.0004 3.68555C10.9899 3.68555 3.68555 10.9899 3.68555 20.0004C3.68555 29.0108 10.9899 36.3152 20.0004 36.3152Z"
        fill="black"
      />
      <path
        d="M17.9263 25.972L12.8652 20.9109L14.687 19.0892L17.9263 22.3285L25.3159 14.939L27.1376 16.7607L17.9263 25.972Z"
        fill="white"
      />
    </svg>
  );
};

export default PositiveIcon;

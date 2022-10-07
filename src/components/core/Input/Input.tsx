import { FC } from 'react';

import './Input.css';

const BaseInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <input
    className='Input'
    {...props}
  />
);

export default BaseInput;

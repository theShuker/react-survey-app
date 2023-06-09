import { forwardRef } from 'react';

const TextInput = forwardRef<HTMLInputElement>(
  (props: React.InputHTMLAttributes<HTMLInputElement>, ref) => {
    return <input ref={ref} type="text" {...props} />;
  }
);
export default TextInput;

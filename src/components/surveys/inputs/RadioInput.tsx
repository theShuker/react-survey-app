import { forwardRef } from 'react';
const RadioInput = forwardRef<HTMLInputElement>(
  (props: React.InputHTMLAttributes<HTMLInputElement>,
    ref) => {
    return (
      <label className="flex gap-2 items-center px-2 py-1 cursor-pointer hover:bg-slate-100">
        <input type="radio" {...props} />
        {props.value}
      </label>
    );
  }
);
export default RadioInput;

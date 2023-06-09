import { forwardRef } from 'react';

const TextareaInput = forwardRef<HTMLTextAreaElement>(
  (
    props: React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    ref
  ) => {
    return <textarea ref={ref} {...props}></textarea>;
  }
);
export default TextareaInput;

const TextareaInput = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  return <textarea {...props}></textarea>;
};
export default TextareaInput;

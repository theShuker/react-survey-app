const RadioInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="flex gap-2 items-center cursor-pointer hover:bg-slate-100">
      <input type="radio" {...props} />
      {props.value}
    </label>
  );
};
export default RadioInput;

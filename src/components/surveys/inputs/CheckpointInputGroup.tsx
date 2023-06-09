import CheckboxInput from './CheckboxInput';

type CheckboxInputProps = {
  answerOptions: string[];
  register: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxInputGroup = (props: CheckboxInputProps) => {
  const { answerOptions, register, ...rest } = props;

  return (
    <div className="flex flex-col gap-1">
      {answerOptions.map((answer) => (
        <CheckboxInput {...register} key={answer} value={answer} {...rest} />
      ))}
    </div>
  );
};

export default CheckboxInputGroup;

import RadioInput from './RadioInput';

type RadioInputProps = {
  answerOptions: string[];
  register: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioInputGroup = (props: RadioInputProps) => {
  const { answerOptions, register, ...rest } = props;

  return (
    <div className="flex flex-col gap-1">
      {answerOptions.map((answer) => (
        <RadioInput {...register} key={answer} value={answer} {...rest} />
      ))}
    </div>
  );
};

export default RadioInputGroup;

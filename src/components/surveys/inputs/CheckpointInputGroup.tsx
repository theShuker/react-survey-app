import CheckboxInput from './CheckboxInput';

type CheckboxInputProps = { answerOptions: string[] } & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxInputGroup = (props: CheckboxInputProps) => {
  const { answerOptions, ...rest } = props;

  return (
    <div className="flex flex-col gap-1">
      {answerOptions.map((answer) => (
        <CheckboxInput key={answer} value={answer} {...rest} />
      ))}
    </div>
  );
};

export default CheckboxInputGroup;

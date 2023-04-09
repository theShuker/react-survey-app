import RadioInput from './RadioInput';

type RadioInputProps = { answerOptions: string[] } & React.InputHTMLAttributes<HTMLInputElement>;

const RadioInputGroup = (props: RadioInputProps) => {
  const { answerOptions, ...rest } = props;

  return (
    <div className='flex flex-col gap-1'>
      {answerOptions.map((answer) => (
        <RadioInput key={answer} value={answer} {...rest} />
      ))}
    </div>
  );
};

export default RadioInputGroup;

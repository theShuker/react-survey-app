import CheckboxInputGroup from '../inputs/CheckpointInputGroup';
import RadioInputGroup from '../inputs/RadioInputGroup';
import TextareaInput from '../inputs/TextareaInput';
import TextInput from '../inputs/TextInput';

export const inputTypes = {
  text: 'Текстовое поле',
  textarea: 'Большой текст',
  radio: 'Один из списка',
  checkbox: 'Несколько из списка',
} as const;

export type QuestionInputType = keyof typeof inputTypes;

const getInputComponentByType = (inputType: QuestionInputType): React.ElementType => {
  switch (inputType) {
    case 'checkbox':
      return CheckboxInputGroup;
      break;

    case 'radio':
      return RadioInputGroup;
      break;

    case 'textarea':
      return TextareaInput;
      break;

    case 'text':
    default:
      return TextInput;
      break;
  }
};

interface QuestionInputProps {
  type: QuestionInputType;
  answerOptions?: string[];
  register?: any;
}

const QuestionInput = ({ type, answerOptions, register, ...args }: QuestionInputProps) => {
  const Input = getInputComponentByType(type);

  switch (Input) {
    case RadioInputGroup:
    case CheckboxInputGroup:
      return <Input {...{ ...args, register, answerOptions }} />;

    default:
      return <Input {...{ ...args, ...register }} />;
  }
};
export default QuestionInput;

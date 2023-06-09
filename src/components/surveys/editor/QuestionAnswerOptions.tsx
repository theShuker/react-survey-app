import { useFieldArray } from 'react-hook-form';
import Button from '../../common/Button';

const QuestionAnswerOptions = ({ questionIndex, inputType, control, register, errors }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    shouldUnregister: true,
    name: `questions.${questionIndex}.answerOptions`,
    rules: { required: 'At least one answer option is required' },
  });

  return (
    <div>
      <b className="block mb-2">Answer options (at least one required)</b>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id} className="flex gap-2 items-center my-2">
            <input type={inputType === 'radio' ? 'radio' : 'checkbox'} disabled />

            <input
              type="text"
              {...register(`questions.${questionIndex}.answerOptions.${index}`, {
                required: 'This field is required',
              })}
            />

            <Button
              color="danger"
              onClick={() => {
                remove(index);
              }}>
              x
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={() => append('')}>+ Add answer option</Button>
    </div>
  );
};

export default QuestionAnswerOptions;

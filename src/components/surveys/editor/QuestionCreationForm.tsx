import { useWatch } from "react-hook-form";
import Button from "../../common/Button";
import QuestionContainer from "../QuestionContainer";
import InputWrapper from "../inputs/InputWrapper";
import TextInput from "../inputs/TextInput";
import QuestionAnswerOptions from "./QuestionAnswerOptions";

import { inputTypes } from "../viewer/QuestionInput";

const QuestionCreationForm = ({ index, fields, register, control, remove, errors }) => {
  
  const selectedQuestionInputType = useWatch({ control, name: `questions.${index}.inputType` });

  return (
    <QuestionContainer>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold">
          Question {index + 1} of {fields.length}
        </span>
        <Button size="small" color="danger" onClick={() => remove(index)}>
          Delete
        </Button>
      </div>

      <InputWrapper label="Question title">
        <TextInput {...register(`questions.${index}.title`)} />
      </InputWrapper>

      <InputWrapper label="Question description">
        <TextInput {...register(`questions.${index}.description`)} />
      </InputWrapper>

      <InputWrapper label="Question input type">
        <select {...register(`questions.${index}.inputType`, { value: 'text' })}>
          {Object.keys(inputTypes).map((key) => (
            <option key={key} value={key}>
              {inputTypes[key]}
            </option>
          ))}
        </select>
      </InputWrapper>

      {(selectedQuestionInputType === 'radio' || selectedQuestionInputType === 'checkbox') && (
        <QuestionAnswerOptions
          {...{
            control,
            errors,
            inputType: selectedQuestionInputType,
            register,
            questionIndex: index,
          }}
        />
      )}
    </QuestionContainer>
  );
};

export default QuestionCreationForm;
import { useFieldArray, useForm } from 'react-hook-form';
import { createSurvey } from '../../services/SurveyService';
import TextInput from '../../components/surveys/inputs/TextInput';
import QuestionCreationForm from '../../components/surveys/editor/QuestionCreationForm';
import Button from '../../components/common/Button';
import { ISurvey } from '../../types/Survey';

const CreateSurveyPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'questions',
    rules: { required: 'You must create at least one question' },
  });

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data);
      createSurvey(data as Omit<ISurvey, 'id'>)
        .then((d) => {
          console.log('created');
        })
        .catch((e) => {
          console.log('error creating survey', e);
        });
    },
    (err) => {
      console.log(err);
      err.questions?.root?.message && alert(err.questions?.root?.message);
    }
  );

  return (
    <main className="p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Create a survey</h1>
      </div>
      <div>
        <div className="mb-2">
          <div className="font-bold">Title</div>
          <TextInput {...register('title', { required: 'Survey title is required' })} />
        </div>
        <div className="mb-2">
          <div className="font-bold">Description</div>
          <TextInput {...register('description', { required: 'Survey title is required' })} />
        </div>
      </div>
      <ul className="flex flex-col gap-2 mt-6">
        {fields.map((field, index) => (
          <QuestionCreationForm
            errors={errors}
            key={field.id}
            control={control}
            fields={fields}
            index={index}
            register={register}
            remove={remove}
          />
        ))}
      </ul>
      <Button
        onClick={() => {
          append({
            title: '',
          });
        }}>
        + Add question
      </Button>
      <div className="mt-2">
        <Button color="success" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </main>
  );
};

export default CreateSurveyPage;

import useSWR from 'swr';
import fetcher from '../services/fetcher';
import { ISurvey } from '../types/Survey';

export const useSubmissions = (surveyId: string) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    `/submissions?surveyId=${surveyId}`,
    fetcher<ISurvey[]>
  );

  return {
    submissions: data,
    error,
    isLoading,
    mutate,
    isValidating,
  };
};

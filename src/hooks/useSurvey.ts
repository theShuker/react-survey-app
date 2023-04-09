import useSWR from 'swr';
import fetcher from '../services/fetcher';
import { ISurvey } from '../types/Survey';

export const useSurvey = (surveyId: string) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    `/surveys/${surveyId}`,
    fetcher<ISurvey>
  );

  return {
    survey: data,
    error,
    isLoading,
    mutate,
    isValidating,
  };
};

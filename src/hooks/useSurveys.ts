import useSWR from 'swr';
import fetcher from '../services/fetcher';
import { ISurvey } from '../types/Survey';

export const useSurveys = () => {
  const { data, error, isLoading, mutate, isValidating } = useSWR('/surveys', fetcher<ISurvey[]>);

  return {
    surveys: data,
    error,
    isLoading,
    mutate,
    isValidating,
  };
};

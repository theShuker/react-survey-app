import useSWR from 'swr';
import { ISurvey } from '../types/Survey';
import fetcher from './fetcher';

const defaultHeaders = {
  headers: { 'Content-Type': 'application/json' }, //json-server needs that
};

export const getSurveys = async () => {
  return fetcher<ISurvey[]>(`/surveys`);
};

export const getSurvey = async (id: string) => {
  return fetcher<ISurvey>(`/surveys/${id}`);
};

export const createSurvey = async (newSurvey: Omit<ISurvey, 'id'>) => {
  return fetcher<ISurvey>(`/surveys`, {
    ...defaultHeaders,
    method: 'POST',
    body: JSON.stringify(newSurvey),
  });
};

export const updateSurvey = async (id: string, updatedFields: Partial<Omit<ISurvey, 'id'>>) => {
  return fetcher<ISurvey>(`/surveys/${id}`, {
    ...defaultHeaders,
    method: 'PATCH',
    body: JSON.stringify(updatedFields),
  });
};

export const deleteSurvey = async (id: string | number) => {
  return fetcher<ISurvey>(`/surveys/${id}`, { ...defaultHeaders, method: 'DELETE' });
};
